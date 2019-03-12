![](https://travis-ci.com/wupeiwen/adapter.svg?branch=master)
[![](https://img.shields.io/npm/v/adapter-vis.svg)](https://www.npmjs.com/package/adapter-vis)
![](https://img.shields.io/bundlephobia/min/vadapter-vis.svg)
![](https://img.shields.io/npm/dt/adapter-vis.svg)
## 为什么做
在使用echarts、g2等可视化类库，实现可视化图表时，需要针对需求调整很多配置项、对接各式各样的业务数据。这个过程中会有一些处理工作，例如数据字段适配、配置项调整。这些工作比较繁琐，遇到需求频繁变更时，会给开发人员带来不少的麻烦。基于上述场景诞生了adapter，它被定义为一个前置的处理模块，来解决这部分繁琐的工作，让可视化实现更为简单、快速。
## 实现说明
> 目前的0.1.0版本，按照实现的效果来看，当前版本更像是一个echarts的配置生成器
### 引入依赖
```
  <script src="../dist/adapter.js"></script>
```
或者
```
  yarn add adapter-vis
```
### 快速使用
新建Adapter.echarts实例，依次传入type(必须)、dataset(必须)、option(非必须)三个参数，返回值为echarts的完整配置项。
```
  let type = 'line'
  let dataset = { dimensions: ['姓名', '成绩'], source: [{ 姓名: 'test', 成绩: 123 }, { 姓名: 'admin', 成绩: 456 }, { 姓名: 'liu', 成绩: 200 }] }
  let option = {}
  let echartsOption = new Adapter.echarts(type, dataset, option)
```
### 配置项说明
#### type '类型'
字符串类型，目前有'line'(折线/面积图) 'bar'(柱状/条形图) 'scatter'(散点图) 'pie'(饼图) 4种类型
#### dataset '数据集'
对象类型，包含'dimensions'以及'source'两个属性
##### dimensions '维度信息'
数组类型，定义/列举原始数据中的维度信息。例如：
```
['姓名', '成绩']
```
##### source '原始数据'
对象数组类型，原始数据。按行的 key-value 形式（对象数组），其中键（key）表明了维度名。例如：
```
[{ 姓名: 'test', 成绩: 123 }, { 姓名: 'admin', 成绩: 456 }, { 姓名: 'liu', 成绩: 200 }]
```
#### option '配置项'
包含了legend、tooltip、xAxis、yAxis、grid等配置项，详细配置像信息参考[echarts 配置项](https://www.echartsjs.com/option.html)