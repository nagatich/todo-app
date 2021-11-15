import * as mobx from 'mobx'

class AppStore {
  @mobx.observable isLoading = true

  constructor() {
    mobx.makeAutoObservable(this)

    setTimeout(() => {
      this.setIsLoading(false)
    }, 5000)
  }

  @mobx.action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }
}

export default new AppStore()
