import { scaleLinear } from 'd3-scale'
import Complex from 'simple-complex'

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
      .range([0, width * this.pixelRatio])
    const scaleY = scaleLinear()
      .domain([this.yMin, this.yMax])
      .range([height * this.pixelRatio, 0])
    const x = scaleX(complex.real)
    const y = scaleY(complex.imaginary)
    return { x, y }
  }

  movePointToPixelCoords(complex, x, y) {
    const { width, height } = this.canvas.getBoundingClientRect()
    const scaleX = scaleLinear()
      .domain([0, width * this.pixelRatio])
      .range([this.xMin, this.xMax])
    const scaleY = scaleLinear()
      .domain([0, height * this.pixelRatio])
      .range([this.yMax, this.yMin])
    complex.set(scaleX(x), scaleY(y))
  }

  drawPoint(complex) {
    const { x, y } = this.getPointPixelCoords(complex)
    this.ctx.beginPath()
    this.ctx.arc(x, y, 2 * this.pixelRatio, 0, 2 * Math.PI)
    this.ctx.stroke()
  }

  drawLine(z1, z2) {
    const { x: x1, y: y1 } = this.getPointPixelCoords(z1)
    const { x: x2, y: y2 } = this.getPointPixelCoords(z2)
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  drawAxes() {
    this.drawLine(new Complex(this.xMin, 0), new Complex(this.xMax, 0))
    this.drawLine(new Complex(0, this.yMin), new Complex(0, this.yMax))
  }

  displayCoords(graph, line = 0) {
    text(`${this.name} = ${this.toString()}`, width - 110, 30 + 15 * line)
  }

  clear() {
    const { width, height } = this.canvas.getBoundingClientRect()
    this.ctx.clearRect(0, 0, width * this.pixelRatio, height * this.pixelRatio)
  }
}

export default Graph
