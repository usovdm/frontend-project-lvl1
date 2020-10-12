import brainEven from './games/even.js'
import brainCalc from './games/calc.js'

export default (game) => {
  if (game === 'even') {
    brainEven()
  } else if (game === 'calc') {
    brainCalc()
  }
}
