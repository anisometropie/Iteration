import Complex from 'simple-complex'
import Graph from '../Graph'

const fakeCanvas = (width, height, left, top) => ({
  style: {},
  ctx: {
    beginPath: jest.fn(),
    closePath: jest.fn(),
    arc: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
    fillStyle: jest.fn(),
    stroke: jest.fn(),
    fill: jest.fn(),
    clearRect: jest.fn()
  },
  getBoundingClientRect() {
    return {
      width,
      height,
      left,
      top
    }
  },
  getContext(dim) {
    return dim === '2d' ? this.ctx : null
  }
})

afterEach(() => {
  global.devicePixelRatio = 1
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
      expect(graph.ctx).toEqual(canvas.getContext('2d'))
      expect(graph.pixelRatio).toEqual(1)
      expect(graph.mouse).toBeInstanceOf(Complex)
      expect(graph.mouseSensitivity).toEqual(1)
    })
    it('should have correct pixelRatio', () => {
      global.devicePixelRatio = 10
      const canvas = fakeCanvas(10, 250)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      expect(graph.pixelRatio).toEqual(10)
    })
    it('should have scales correctly defined', () => {
      const canvas = fakeCanvas(250, 500)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      expect(graph.numberToPixelScaleX(-1)).toEqual(0)
      expect(graph.numberToPixelScaleX(0)).toEqual(125)
      expect(graph.numberToPixelScaleX(1)).toEqual(250)

      expect(graph.numberToPixelScaleY(-1)).toEqual(500)
      expect(graph.numberToPixelScaleY(0)).toEqual(250)
      expect(graph.numberToPixelScaleY(1)).toEqual(0)

      expect(graph.pixelToNumberScaleX(0)).toEqual(-1)
      expect(graph.pixelToNumberScaleX(125)).toEqual(0)
      expect(graph.pixelToNumberScaleX(250)).toEqual(1)

      expect(graph.pixelToNumberScaleY(0)).toEqual(1)
      expect(graph.pixelToNumberScaleY(250)).toEqual(0)
      expect(graph.pixelToNumberScaleY(500)).toEqual(-1)
    })
  })

  describe('setupCanvas', () => {
    it('should set sizes and style.sizes', () => {
      const canvas = fakeCanvas(10, 250)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      expect(graph.canvas.width).toEqual(10)
      expect(graph.canvas.height).toEqual(250)
      expect(graph.canvas.style.width).toEqual('10px')
      expect(graph.canvas.style.height).toEqual('250px')
    })
    it('should set sizes and style.sizes with given pixelRatio', () => {
      global.devicePixelRatio = 3
      const canvas = fakeCanvas(10, 250)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      expect(graph.canvas.width).toEqual(30)
      expect(graph.canvas.height).toEqual(750)
      expect(graph.canvas.style.width).toEqual('10px')
      expect(graph.canvas.style.height).toEqual('250px')
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
      it('should return the complex numbers coords in pixel with devicePixelRatio = 2', () => {
        global.devicePixelRatio = 2
        const canvas = fakeCanvas(100, 100)
        const graph = new Graph(-1, 1, -1, 1, canvas)
        const origin = new Complex(0, 0)
        const top = new Complex(0, 1)
        const bottom = new Complex(0, -1)
        const right = new Complex(1, 0)
        const left = new Complex(-1, 0)
        expect(graph.getPointPixelCoords(origin)).toEqual({ x: 100, y: 100 })
        expect(graph.getPointPixelCoords(top)).toEqual({ x: 100, y: 0 })
        expect(graph.getPointPixelCoords(bottom)).toEqual({ x: 100, y: 200 })
        expect(graph.getPointPixelCoords(right)).toEqual({ x: 200, y: 100 })
        expect(graph.getPointPixelCoords(left)).toEqual({ x: 0, y: 100 })
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
    it('should move point to coords given pixel coords', () => {
      global.devicePixelRatio = 3
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const z = new Complex(0, 0)
      graph.movePointToPixelCoords(z, 300, 300)
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

  describe('drawLine', () => {
    it('should draw a line on the canvas', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const ctx = canvas.getContext('2d')
      const z1 = new Complex(-1, -1)
      const z2 = new Complex(1, 1)
      graph.drawLine(z1, z2)
      expect(ctx.beginPath).toHaveBeenCalled()
      expect(ctx.moveTo.mock.calls[0]).toEqual([0, 100])
      expect(ctx.lineTo.mock.calls[0]).toEqual([100, 0])
      expect(ctx.stroke).toHaveBeenCalled()
      expect(ctx.closePath).toHaveBeenCalled()
    })
    it('should draw a line on the canvas with devicePixelRatio = 2', () => {
      global.devicePixelRatio = 2
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      const ctx = canvas.getContext('2d')
      const z1 = new Complex(-1, -1)
      const z2 = new Complex(1, 1)
      graph.drawLine(z1, z2)
      expect(ctx.beginPath).toHaveBeenCalled()
      expect(ctx.moveTo.mock.calls[0]).toEqual([0, 200])
      expect(ctx.lineTo.mock.calls[0]).toEqual([200, 0])
      expect(ctx.stroke).toHaveBeenCalled()
      expect(ctx.closePath).toHaveBeenCalled()
    })
  })

  describe('drawAxes', () => {
    it('should draw axes', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.drawLine = jest.fn()
      graph.drawAxes()
      expect(graph.drawLine.mock.calls[0]).toEqual([
        new Complex(-1, 0),
        new Complex(1, 0)
      ])
      expect(graph.drawLine.mock.calls[1]).toEqual([
        new Complex(0, -1),
        new Complex(0, 1)
      ])
    })
    it('should draw axes', () => {
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(0, 10, 0, 20, canvas)
      graph.drawLine = jest.fn()
      graph.drawAxes()
      expect(graph.drawLine.mock.calls[0]).toEqual([
        new Complex(0, 0),
        new Complex(10, 0)
      ])
      expect(graph.drawLine.mock.calls[1]).toEqual([
        new Complex(0, 0),
        new Complex(0, 20)
      ])
    })
  })

  describe('updateMousePosition', () => {
    it('should update mouse position X', () => {
      const canvas = fakeCanvas(100, 100, 0, 0)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.updateMousePosition({ movementX: 10, movementY: 0 })
      const expectedMouseValue = new Complex(0.2, 0)
      expect(graph.mouse).toEqual(expectedMouseValue)
    })
    it('should update mouse position Y', () => {
      const canvas = fakeCanvas(100, 100, 0, 0)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.updateMousePosition({ movementX: 0, movementY: 10 })
      const expectedMouseValue = new Complex(0, -0.2)
      expect(graph.mouse).toEqual(expectedMouseValue)
    })
    it('should update mouse position with devicePixelRatio = 2', () => {
      global.devicePixelRatio = 2
      const canvas = fakeCanvas(100, 100, 0, 0)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.updateMousePosition({ movementX: 10, movementY: 10 })
      const expectedMouseValue = new Complex(0.1, -0.1)
      expect(graph.mouse).toEqual(expectedMouseValue)
    })
    it('should update mouse position with mouseSensitivity = 1/2', () => {
      const canvas = fakeCanvas(100, 100, 0, 0)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.mouseSensitivity = 1 / 2
      graph.updateMousePosition({ movementX: 10, movementY: 10 })
      const expectedMouseValue = new Complex(0.1, -0.1)
      expect(graph.mouse).toEqual(expectedMouseValue)
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
    it('should clear the graph with devicePixelRatio = 2', () => {
      global.devicePixelRatio = 2
      const canvas = fakeCanvas(100, 100)
      const graph = new Graph(-1, 1, -1, 1, canvas)
      graph.clear()
      const ctx = canvas.getContext('2d')
      expect(ctx.clearRect.mock.calls[0]).toEqual([0, 0, 200, 200])
    })
  })
})
