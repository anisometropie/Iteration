const round2decimals = num => Math.round(num * 100) / 100;

class Complex {
  constructor(a = 0, b = 0) {
    if (a instanceof Complex) {
      this.real = a.real;
      this.imaginary = a.imaginary;
    } else {
      this.real = a;
      this.imaginary = b;
    }
  }

  static exp(z) {
    const _z = z.clone();
    const real = Math.exp(z.real) * Math.cos(z.imaginary);
    const imaginary = Math.exp(z.real) * Math.sin(z.imaginary);
    _z.set(real, imaginary);
    return _z;
  }

  static square(z) {
    const _z = z.clone();
    const real = z.real ** 2 - z.imaginary ** 2;
    const imaginary = 2 * z.real * z.imaginary;
    _z.set(real, imaginary);
    return _z;
  }

  static fromAngle(modulus, argument) {
    return new Complex(
      modulus * Math.cos(argument),
      modulus * Math.sin(argument)
    );
  }

  static multiply(z1, z2) {
    const z = z1.clone();
    z.multiplyBy(z2);
    return z;
  }

  multiplyBy(z) {
    let real, imaginary;
    if (typeof z === "number") {
      real = this.real * z;
      imaginary = this.imaginary * z;
    } else if (typeof z === "object") {
      real = this.real * z.real - this.imaginary * z.imaginary;
      imaginary = this.real * z.imaginary + this.imaginary * z.real;
    }
    this.set(real, imaginary);
  }

  set modulus(value) {
    if (value < 0) {
      this.rotate(PI);
      this.set(
        -value * Math.cos(this.argument),
        -value * Math.sin(this.argument)
      );
    } else {
      this.set(
        value * Math.cos(this.argument),
        value * Math.sin(this.argument)
      );
    }
  }

  rotate(angle) {
    const a = Math.cos(angle);
    const b = Math.sin(angle);
    const z = new Complex(a, b);
    this.multiplyBy(z);
  }

  set(a, b) {
    this.real = a;
    this.imaginary = b;
  }

  get modulus() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  get argument() {
    return Math.atan2(this.imaginary, this.real);
  }

  clone() {
    const clone = _.cloneDeep(this);
    return clone;
  }

  toString() {
    let str = String(round2decimals(this.real));
    str +=
      this.imaginary !== 0 ? ` +  ${round2decimals(this.imaginary)} i` : "";
    return str;
  }
}

class ComplexPoint extends Complex {
  constructor(a = 0, b = 0, name) {
    super(a, b);
    this.name = name;
  }

  getPixelCoords(graph) {
    const x = map(this.real, graph.XMIN, graph.XMAX, 0, width);
    const y = map(this.imaginary, graph.YMIN, graph.YMAX, height, 0);
    return { x, y };
  }

  move(newX, newY, graph) {
    this.real = map(newX, 0, width, graph.XMIN, graph.XMAX);
    this.imaginary = map(newY, height, 0, graph.YMIN, graph.YMAX);
  }

  display(graph) {
    push();
    const x = map(this.real, graph.XMIN, graph.XMAX, 0, width);
    const y = map(this.imaginary, graph.YMIN, graph.YMAX, height, 0);
    strokeWeight(1);
    circle(x, y, 2);
    pop();
  }

  displayCoords(graph, line = 0) {
    text(`${this.name} = ${this.toString()}`, width - 110, 30 + 15 * line);
  }
}

// vector from start & end points
// start and end are ComplexPoints
class Vector {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get x() {
    return this.end.real - this.start.real;
  }

  get y() {
    return this.end.imaginary - this.start.imaginary;
  }

  get angle() {
    return Math.atan2(this.x, this.y);
  }

  set length(value) {
    const v = new Complex(this.x, this.y);
    v.modulus = value;
    this.end.set(this.start.real + v.real, this.start.imaginary + v.imaginary);
  }

  get length() {
    const v = new Complex(this.x, this.y);
    return v.modulus;
  }

  clone() {
    const clone = _.cloneDeep(this);
    return clone;
  }

  display(graph) {
    const start = this.start.getPixelCoords(graph);
    const end = this.end.getPixelCoords(graph);
    line(start.x, start.y, end.x, end.y);
  }

  displayNormalized(graph, length) {
    const v = this.clone();
    v.length = length;
    push();
    const red = map(this.length, 0, 100, 0, 255);
    const blue = map(this.length, 0, 100, 255, 0);
    const weight = map(this.length, 0, 1000, 0.4, 20);
    // const weight = d3
    //   .scaleLog()
    //   .domain([10, 100000])
    //   .range([0.4, 4])(this.length);
    stroke(red, 0, blue);
    strokeWeight(weight);
    v.display(graph);
    pop();
  }
}

const DIMENSION = 31;
const GRAPH = {
  XMIN: -10,
  XMAX: 10,
  YMIN: -10,
  YMAX: 10
};

let grid;

function setup() {
  canvas = createCanvas(800, 800);
  grid = [...Array(DIMENSION).keys()].map(x =>
    [...Array(DIMENSION).keys()].map(y => {
      const start = new ComplexPoint(
        map(x, 0, DIMENSION, GRAPH.XMIN, GRAPH.XMAX),
        map(y, 0, DIMENSION, GRAPH.YMIN, GRAPH.YMAX)
      );
      const end = Complex.square(start);
      return new Vector(start, end);
    })
  );
}

function draw() {
  background(255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  grid.forEach(arr => arr.forEach(z => z.displayNormalized(GRAPH, 0.4)));
}
