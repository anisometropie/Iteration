import Complex from 'simple-complex'
import Graph from './Graph'
import { generateValues, iterate } from './maths'
import closeFile from 'assets/close.png'
import farFile from 'assets/far.png'

const close = new Image()
close.src = closeFile
const far = new Image()
far.src = farFile

const canvas = document.getElementById('canvas')
const checkbox = document.getElementById('checkbox')
const zoomCheckbox = document.getElementById('zoom-checkbox')
const valuesCheckbox = document.getElementById('values-checkbox')
const divValues = document.getElementById('values')

export const ITERATIONS = 1000
const graph = new Graph(-2.25, 1.125, -1.125, 1.125, canvas)
const values = [new Complex(0, 0), ...Array(ITERATIONS).keys()].map(
  n => new Complex()
)

document.body.onkeypress = event => {
  if (event.code === 'Space') {
    checkbox.checked = !checkbox.checked
    handleDisplayFractalChange({ target: checkbox })
  }
}
document.body.onwheel = event => {
  graph.updateMouseSensitivity(event);
  }

const handleDisplayFractalChange = event => {
  const { checked } = event.target
  if (checked) {
    drawMandelbrot()
    graph.ctx.fillStyle = 'white'
    graph.ctx.strokeStyle = 'white'
  } else {
    graph.ctx.fillStyle = 'black'
    graph.ctx.strokeStyle = 'black'
  }
}

checkbox.onclick = handleDisplayFractalChange
zoomCheckbox.onclick = event => {
  const { checked } = event.target
  if (checked) {
    currentZoom = 'close'
    graph.setRanges(-2.25, 1.125, -1.125, 1.125)
  } else {
    currentZoom = 'far'
    graph.setRanges(-3, 3, -2, 2)
  }
  if (checkbox.checked) {
    drawMandelbrot()
  }
}

const fractal = { close, far }
let currentZoom = 'close'

function draw() {
  window.requestAnimationFrame(draw)
  graph.clear()
  if (checkbox.checked) {
    graph.drawImage(fractal[currentZoom])
  }
  graph.drawAxes()
  generateValues(values, graph.mouse)
  displayValues(values)
  values.forEach((v, i) => {
    if (i < ITERATIONS) {
      graph.drawLine(v, values[i + 1])
    }
    graph.drawPoint(v)
  })
  const sensitivityValue = `${graph.mouseSensitivity !== 1 ? '1/' : ''}${1 /
    graph.mouseSensitivity}`
  graph.displayText(`Mouse sensitivity: ${sensitivityValue}`)
  graph.displayText(graph.mouse.toString(), 1)
}
draw()

const maxIteration = 50
function drawMandelbrot() {
  if (!fractal[currentZoom]) {
    fractal[currentZoom] = graph.createImageData()
    for (let i = 0; i < graph.canvas.width; i++) {
      for (let j = 0; j < graph.canvas.height; j++) {
        const c = graph.getComplexFromPixelCoords(i, j)
        let z = new Complex(0, 0)
        let n = 0
        while (n < maxIteration) {
          const zNext = iterate(z, c)
          if (zNext.modulus > 2) {
            break
          }
          n++
          z = zNext
        }
        const pixelIndex = (i + j * graph.canvas.width) * 4
        if (n === maxIteration) {
          fractal[currentZoom].data[pixelIndex] = 0
          fractal[currentZoom].data[pixelIndex + 1] = 0
          fractal[currentZoom].data[pixelIndex + 2] = 0
          fractal[currentZoom].data[pixelIndex + 3] = 255
        } else {
          fractal[currentZoom].data[pixelIndex] = (n * 16) % 255
          fractal[currentZoom].data[pixelIndex + 1] = (n * 16) % 255
          fractal[currentZoom].data[pixelIndex + 2] = (n * 16) % 255
          fractal[currentZoom].data[pixelIndex + 3] = 255
        }
      }
    }
  }
}
function displayValues(values) {
  const string = values.slice(0, 20).reduce((acc, z) => {
    return `${acc}${z.toString()}<br>`
  }, '')
  divValues.innerHTML = valuesCheckbox.checked ? string : ''
}
