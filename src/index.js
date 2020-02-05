import Complex from 'simple-complex'
import Graph from './Graph'

const ITERATIONS = 1000
const canvas = document.getElementById('canvas')
const graph = new Graph(-2, 1, -1, 1, canvas)

const iterate = z => Complex.sum(Complex.square(z), graph.mouse)
const generateValues = (values = []) => {
  for (let i = 0; i < ITERATIONS; i++) {
    const { real, imaginary } = iterate(values[i])
    values[i + 1].set(real, imaginary)
  }
}
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

function draw() {
  window.requestAnimationFrame(draw)
  graph.clear()
  graph.drawAxes()
  graph.drawPoint(graph.mouse)
  generateValues(values)
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
