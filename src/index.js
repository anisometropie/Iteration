import Complex from 'simple-complex'

import Graph from './Graph'
import Vector from './Vector'

const canvas = document.getElementById('canvas')
const graph = new Graph(-1, 1, -1, 1, canvas)

const mouse = new Complex(0, 0)

function draw() {
  window.requestAnimationFrame(draw)
  graph.clear()
}
draw()
