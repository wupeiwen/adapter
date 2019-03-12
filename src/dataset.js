export default class Dataset {
  constructor(dataset) {
    dataset = {
      dimensions: (dataset && dataset.dimensions) ? dataset.dimensions : ['name', 'value'],
      source: (dataset && dataset.source) ? dataset.source : []
    }
    return {'dataset': dataset}
  }
}