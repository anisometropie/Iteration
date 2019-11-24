import { scaleLinear } from 'd3-scale'

class Graph {
  constructor(xMin, xMax, yMin, yMax, canvas) {
    this.xMin = xMin
    this.xMax = xMax
    this.yMin = yMin
    this.yMax = yMax
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1
    this.setupCanvas()
  }

  setupCanvas() {
    const { width, height } = this.canvas.getBoundingClientRect()
    this.canvas.width = width * this.pixelRatio
    this.canvas.height = height * this.pixelRatio
    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`
  }

  getPointPixelCoords(complex) {
    const { width, height } = this.canvas.getBoundingClientRect()
    const scaleX = scaleLinear()
      .domain([this.xMin, this.xMax])
      .range([0, width])
    const scaleY = scaleLinear()
      .domain([this.yMin, this.yMax])
      .range([height, 0])
    const x = scaleX(complex.real)
    const y = scaleY(complex.imaginary)
    return { x, y }
  }

  movePointToPixelCoords(complex, x, y) {
    const { width, height } = this.canvas.getBoundingClientRect()
    const scaleX = scaleLinear()
      .domain([0, width])
      .range([this.xMin, this.xMax])
    const scaleY = scaleLinear()
      .domain([0, height])
      .range([this.yMax, this.yMin])
    complex.set(scaleX(x), scaleY(y))
  }

  drawPoint(complex) {
    const { x, y } = this.getPointPixelCoords(complex)
    this.ctx.beginPath()
    this.ctx.arc(
      x * this.pixelRatio,
      y * this.pixelRatio,
      2 * this.pixelRatio,
      0,
      2 * Math.PI
    )
    this.ctx.stroke()
  }

  displayCoords(graph, line = 0) {
    text(`${this.name} = ${this.toString()}`, width - 110, 30 + 15 * line)
  }

  clear() {
    const { width, height } = this.canvas.getBoundingClientRect()
    this.ctx.clearRect(0, 0, width, height)
  }
}

export default Graph
