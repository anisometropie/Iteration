import Complex from 'simple-complex'
import { ITERATIONS } from './index'

export const generateValues = (values = [], c) => {
  for (let i = 0; i < ITERATIONS; i++) {
    const { real, imaginary } = iterate(values[i], c)
    values[i + 1].set(real, imaginary)
  }
}

export const iterate = (z, c) => Complex.sum(Complex.square(z), c)
