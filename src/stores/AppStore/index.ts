import * as mobx from 'mobx'

import Store from 'stores/Store'
import AuthStore from 'stores/AuthStore'
import UserStore from 'stores/UserStore'

class AppStore extends Store {
  @mobx.observable authStore: AuthStore
  @mobx.observable userStore: UserStore

  constructor() {
    super()
    mobx.makeObservable(this)

    this.authStore = new AuthStore(this)
    this.userStore = new UserStore(this)
  }
}

export default AppStore
