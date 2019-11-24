import Complex from 'simple-complex'
import Graph from '../Graph'

const fakeCanvas = (width, height) => ({
  style: {},
  ctx: {
    beginPath: jest.fn(),
    closePath: jest.fn(),
    arc: jest.fn(),
    fillStyle: jest.fn(),
    stroke: jest.fn(),
    fill: jest.fn(),
    clearRect: jest.fn()
  },
  getBoundingClientRect() {
    return {
      width,
      height
    }
  },
  getContext(dim) {
    return dim === '2d' ? this.ctx : null
  }
})

describe('Graph', () => {
  describe('constructor', () => {
    it('should create an object from given params', () => {
      const canvas = fakeCanvas(10, 250)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      expect(graph).toBeInstanceOf(Graph)
      expect(graph.xMin).toEqual(-1)
      expect(graph.xMax).toEqual(1)
      expect(graph.yMin).toEqual(-1)
      expect(graph.yMax).toEqual(1)
      expect(graph.canvas).toEqual(canvas)
    })
  })

  describe('getPointPixelCoords', () => {
    describe('2×2 graph', () => {
      it('should return the complex numbers coords in pixel', () => {
        const canvas = fakeCanvas(100, 100)
        const graph = new Graph(-1, 1, -1, 1, canvas)
        const origin = new Complex(0, 0)
        const top = new Complex(0, 1)
        const bottom = new Complex(0, -1)
        const right = new Complex(1, 0)
        const left = new Complex(-1, 0)
        expect(graph.getPointPixelCoords(origin)).toEqual({ x: 50, y: 50 })
        expect(graph.getPointPixelCoords(top)).toEqual({ x: 50, y: 0 })
        expect(graph.getPointPixelCoords(bottom)).toEqual({ x: 50, y: 100 })
        expect(graph.getPointPixelCoords(right)).toEqual({ x: 100, y: 50 })
        expect(graph.getPointPixelCoords(left)).toEqual({ x: 0, y: 50 })
      })
    })
  })

  describe('movePointToPixelCoords', () => {
    it('should move point to coords given pixel coords', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const z = new Complex(0, 0)
      graph.movePointToPixelCoords(z, 100, 100)
      expect(z.real).toEqual(1)
      expect(z.imaginary).toEqual(-1)
    })
  })

  describe('drawPoint', () => {
    it('should draw the complex(0,0) on the canvas', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const z = new Complex(0, 0)
      graph.drawPoint(z)
      const ctx = canvas.getContext('2d')
      expect(ctx.beginPath).toHaveBeenCalled()
      expect(ctx.arc.mock.calls[0]).toEqual([50, 50, 2, 0, 2 * Math.PI])
      expect(ctx.stroke).toHaveBeenCalled()
    })
    it('should draw the complex(1,0) on the canvas', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const z = new Complex(1, 0)
      graph.drawPoint(z)
      const ctx = canvas.getContext('2d')
      expect(ctx.beginPath).toHaveBeenCalled()
      expect(ctx.arc.mock.calls[0]).toEqual([100, 50, 2, 0, 2 * Math.PI])
      expect(ctx.stroke).toHaveBeenCalled()
    })
    it('should draw depending on the pixel ratio', () => {
      global.devicePixelRatio = 2
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const z = new Complex(1, 0)
      graph.drawPoint(z)
      const ctx = canvas.getContext('2d')
      expect(ctx.beginPath).toHaveBeenCalled()
      expect(ctx.arc.mock.calls[0]).toEqual([200, 100, 4, 0, 2 * Math.PI])
      expect(ctx.stroke).toHaveBeenCalled()
    })
  })

  describe('clear', () => {
    it('should clear the graph', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.clear()
      const ctx = canvas.getContext('2d')
      expect(ctx.clearRect.mock.calls[0]).toEqual([0, 0, 100, 100])
    })
  })
})
