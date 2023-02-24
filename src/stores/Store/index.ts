import * as mobx from 'mobx'

class Store {
  @mobx.observable isLoading = true

  constructor() {
    mobx.makeObservable(this)
  }

  @mobx.action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }
}

export default Store
