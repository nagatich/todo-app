import * as mobx from 'mobx'

import Store from 'stores/Store'
import AppStore from 'stores/AppStore'

import type { User } from 'api/auth/types'

class UserStore extends Store {
  @mobx.observable user?: User

  constructor(public appStore: AppStore) {
    super()
    mobx.makeObservable(this)
  }

  @mobx.action setUser = (user?: User) => {
    this.user = user
  }
}

export default UserStore
