export default class XAxis {
  constructor(axis) {
    axis = axis ? axis : { type: 'category' }
    return { xAxis: axis }
  }
} 