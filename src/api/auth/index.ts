import request from 'api/request'

import type { User } from './types'

export const login = async () => {
  const data = await request<User>('POST', 'auth/login/', {
    body: {
      username: 'nagatich',
      password: 'anivia65',
    },
  })
  return data
}

export const getProfile = async () => {
  const data = await request<User>('GET', 'auth/profile/')
  return data
}
