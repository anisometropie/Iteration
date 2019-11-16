import Complex from 'simple-complex'

class ComplexPoint extends Complex {
  constructor(a = 0, b = 0, name) {
    super(a, b)
    this.name = name
  }

  getPixelCoords(graph) {
    const x = map(this.real, graph.XMIN, graph.XMAX, 0, width)
    const y = map(this.imaginary, graph.YMIN, graph.YMAX, height, 0)
    return { x, y }
  }

  move(newX, newY, graph) {
    this.real = map(newX, 0, width, graph.XMIN, graph.XMAX)
    this.imaginary = map(newY, height, 0, graph.YMIN, graph.YMAX)
  }

  display(graph) {
    push()
    const x = map(this.real, graph.XMIN, graph.XMAX, 0, width)
    const y = map(this.imaginary, graph.YMIN, graph.YMAX, height, 0)
    strokeWeight(1)
    circle(x, y, 2)
    pop()
  }

  displayCoords(graph, line = 0) {
    text(`${this.name} = ${this.toString()}`, width - 110, 30 + 15 * line)
  }
}

// vector from start & end points
// start and end are ComplexPoints
class Vector {
  constructor(start, end) {
    this.start = start
    this.end = end
  }

  get x() {
    return this.end.real - this.start.real
  }

  get y() {
    return this.end.imaginary - this.start.imaginary
  }

  get angle() {
    return Math.atan2(this.x, this.y)
  }

  set length(value) {
    const v = new Complex(this.x, this.y)
    v.modulus = value
    this.end.set(this.start.real + v.real, this.start.imaginary + v.imaginary)
  }

  get length() {
    const v = new Complex(this.x, this.y)
    return v.modulus
  }

  clone() {
    const clone = _.cloneDeep(this)
    return clone
  }

  display(graph) {
    const start = this.start.getPixelCoords(graph)
    const end = this.end.getPixelCoords(graph)
    line(start.x, start.y, end.x, end.y)
  }

  displayNormalized(graph, length) {
    const graphSize = (graph.XMAX - graph.XMIN) / 2
    const v = this.clone()
    v.length = length
    push()
    const red = map(this.length, 0, graphSize ** 2, 0, 255)
    const blue = map(this.length, 0, graphSize ** 2, 255, 0)
    const weight = map(this.length, 0, graphSize ** 2, 0.4, 2.5)
    // const weight = d3
    //   .scaleLog()
    //   .domain([10, 100000])
    //   .range([0.4, 4])(this.length);
    stroke(red, 0, blue)
    strokeWeight(weight)
    v.display(graph)
    pop()
  }
}

const DIMENSION = 31
let GRAPH = {
  XMIN: -1,
  XMAX: 1,
  YMIN: -1,
  YMAX: 1
}

let grid
const mouse = new ComplexPoint(-0.345, 0.59, 'c')
let slider

function setup() {
  canvas = createCanvas(800, 800)
  canvas.parent(document.getElementById('canvas'))
  slider = select('#slider')
}

function draw() {
  background(255)
  GRAPH = {
    XMIN: -slider.value(),
    XMAX: slider.value(),
    YMIN: -slider.value(),
    YMAX: slider.value()
  }
  drawChart()
  if (mouseIsPressed && mouseY < height) {
    mouse.move(mouseX, mouseY, GRAPH)
  }
  mouse.display(GRAPH)
  grid = [...Array(DIMENSION).keys()].map(x =>
    [...Array(DIMENSION).keys()].map(y => {
      const start = new ComplexPoint(
        map(x, 0, DIMENSION, GRAPH.XMIN, GRAPH.XMAX),
        map(y, 0, DIMENSION, GRAPH.YMIN, GRAPH.YMAX)
      )
      const end = Complex.square(start)
      end.add(mouse)
      return new Vector(start, end)
    })
  )
  grid.forEach(arr =>
    arr.forEach(z => z.displayNormalized(GRAPH, slider.value() / 25))
  )
}

function drawChart() {
  line(width / 2, 0, width / 2, height)
  line(0, height / 2, width, height / 2)
}
