import AsyncStorage from '@react-native-async-storage/async-storage'

import { EAuth } from './types'

const URL = 'http://192.168.1.14:8000/'

type Method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'

interface Body {
  [key: string]: string | number | string[] | number[] | Body
}

interface Options {
  headers?: { [key: string]: string }
  body?: Body
}

const removeAccessToken = async () => {
  await AsyncStorage.removeItem(EAuth.token)
}

const request = async <T = any>(method: Method, uri: string, options: Options = {}): Promise<T> => {
  const url = `${URL}${uri}`
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    'mobile-app': 'pepega',
  }
  const accessToken = await AsyncStorage.getItem(EAuth.token)
  console.log({ accessToken })
  if (accessToken) {
    headers.Authorization = `Token ${accessToken}`
  }

  const req = await fetch(url, {
    method,
    headers: {
      ...headers,
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })
  if (req.ok) {
    return req.json()
  }
  if (req.status === 401 || req.status === 403) {
    removeAccessToken()
  }
  try {
    const json = await req.json()
    if (json.error) {
      throw new Error(json.error)
    }
  } catch (err) {
    const e = err as Error
    if (e.name !== 'FetchError') {
      throw e
    }
  }
  throw new Error(req.statusText)
}

export default request
