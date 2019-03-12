export default class Series {
  constructor(type, series) {
    series = series ? series : [{ type: type }]
    return { series: series }
  }
}