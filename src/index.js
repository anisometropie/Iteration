import Complex from 'simple-complex'
import Graph from './Graph'
import { generateValues, iterate } from './maths'

const canvas = document.getElementById('canvas')
const checkbox = document.getElementById('checkbox')

export const ITERATIONS = 1000
const graph = new Graph(-2, 1, -1, 1, canvas)
const values = [new Complex(0, 0), ...Array(ITERATIONS).keys()].map(
  n => new Complex()
)

document.body.onwheel = event => {
  const { deltaY } = event
  if (deltaY < 0 && graph.mouseSensitivity < 1) {
    graph.mouseSensitivity *= 2
  } else if (deltaY > 0) {
    graph.mouseSensitivity /= 2
  }
}
checkbox.onclick = event => {
  const { checked } = event.target
  if (checked && !fractal) {
    drawMandelbrot()
  }
}

let fractal

function draw() {
  window.requestAnimationFrame(draw)
  graph.clear()
  if (checkbox.checked) {
    graph.putImageData(fractal)
  }
  graph.drawAxes()
  graph.drawPoint(graph.mouse)
  generateValues(values, graph.mouse)
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

const maxIteration = 15
function drawMandelbrot() {
  fractal = graph.createImageData()
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
        fractal.data[pixelIndex] = 0
        fractal.data[pixelIndex + 1] = 0
        fractal.data[pixelIndex + 2] = 0
        fractal.data[pixelIndex + 3] = 255
      } else {
        fractal.data[pixelIndex] = (n * 16) % 255
        fractal.data[pixelIndex + 1] = (n * 16) % 255
        fractal.data[pixelIndex + 2] = (n * 16) % 255
        fractal.data[pixelIndex + 3] = 255
      }
    }
  }
}
