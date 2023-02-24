import * as mobx from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getProfile, login } from 'api/auth'
import Store from 'stores/Store'
import AppStore from 'stores/AppStore'
import { EAuth } from 'api/types'

class AuthStore extends Store {
  constructor(public appStore: AppStore) {
    super()
    mobx.makeObservable(this)
    this.init()
  }

  @mobx.action init = async () => {
    const token = await AsyncStorage.getItem(EAuth.token)
    if (token) {
      await this.getProfile()
    }
    setTimeout(() => {
      this.appStore.setIsLoading(false)
    }, 1500)
  }

  @mobx.action login = async () => {
    const res = await login()
    await AsyncStorage.setItem(EAuth.token, res.token)
    this.appStore.userStore?.setUser(res)
  }

  @mobx.action getProfile = async () => {
    const res = await getProfile()
    this.appStore.userStore?.setUser(res)
  }
}

export default AuthStore
