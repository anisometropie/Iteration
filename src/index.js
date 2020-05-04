import Complex from 'simple-complex'
import Graph from './Graph'
import { generateValues } from './maths'

const canvas = document.getElementById('canvas')

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

function draw() {
  window.requestAnimationFrame(draw)
  graph.clear()
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
