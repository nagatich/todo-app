import type { RouteProp as NavigationRouteProp } from '@react-navigation/core'
import type { ParamListBase } from '@react-navigation/routers'
import type { StackNavigationProp } from '@react-navigation/stack'

export type RouteProp<T extends ParamListBase, K extends keyof T = keyof T> = NavigationRouteProp<T, K>
export type NavigationProp<
  T extends ParamListBase,
  K extends keyof T = keyof T
> = StackNavigationProp<T, K>
