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

  get square() {
    const { real, imaginary } = this;
    return new Complex(real ** 2 - imaginary ** 2, 2 * real * imaginary);
  }

  get modulus() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  get argument() {
    return Math.atan2(this.imaginary, this.real);
  }

  clone() {
    const prototype = Object.getPrototypeOf(this);
    const obj = Object.create(prototype);
    for (const key of Reflect.ownKeys(this)) {
      const descriptors = Reflect.getOwnPropertyDescriptor(this, key);
      Reflect.defineProperty(obj, key, descriptors);
    }
    return obj;
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

  display(graph) {
    const start = this.start.getPixelCoords(graph);
    const end = this.end.getPixelCoords(graph);
    line(start.x, start.y, end.x, end.y);
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
}

const DIMENSION = 21;
const GRAPH = {
  XMIN: -10,
  XMAX: 10,
  YMIN: -10,
  YMAX: 10
};

const mouse = new ComplexPoint(-0.345, 0.59, "c");
const grid = [...Array(DIMENSION).keys()].map(n =>
  [...Array(DIMENSION).keys()].map(m => {
    const start = new ComplexPoint(
      n - (DIMENSION - 1) / 2,
      m - (DIMENSION - 1) / 2
    );
    const end = ComplexPoint.multiply(start, 2);
    return new Vector(start, end);
  })
);
const a = new Complex(1, 3);
const b = new Complex(2, 5);
const v = new Vector(a, b);
console.log(v, v.length);
v.length;

function setup() {
  canvas = createCanvas(800, 800);
  grid.forEach(arr => arr.forEach(z => (z.length = 0.5)));
}

function draw() {
  background(220);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  push();
  stroke(200, 100, 100);
  grid.forEach(arr => arr.forEach(z => z.display(GRAPH)));
  pop();
}
