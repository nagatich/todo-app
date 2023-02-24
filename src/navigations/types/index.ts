import type { NavigatorScreenParams } from '@react-navigation/native'
import type { AuthStackParamList } from 'navigations/AuthStack/types'

export type RootStackParamList = {
  Splash: undefined
  Home: undefined
  Auth: NavigatorScreenParams<AuthStackParamList>
}
