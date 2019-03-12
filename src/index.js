import Dataset from './dataset'
import Legend from './legend'
import Tooltip from './tooltip'
import XAxis from './xAxis'
import YAxis from './yAxis'
import Grid from './grid'
import Series from './series'

export class echarts {
  constructor(type, dataset, option) {
    // 数据集
    this.dataset = new Dataset(dataset)
    // 设置图例
    this.legend = new Legend(option.legend)
    // 设置提示框
    this.tooltip = new Tooltip(option.tooltip)
    // 设置X轴
    this.xAxis = new XAxis(option.xAxis)
    // 设置Y轴
    this.yAxis = new YAxis(option.yAxis)
    // 设置网格
    this.grid = new Grid(option.grid)
    // 设置系列
    this.series = new Series(type, option.series)
    // 组合配置项
    this.option = Object.assign(this.dataset, this.legend, this.tooltip, this.xAxis, this.yAxis, this.grid, this.series)
    return this.option
  }
}