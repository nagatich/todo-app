import * as React from 'react'
import { Text } from 'react-native'
import { observer } from 'mobx-react'
import { useNavigation } from '@react-navigation/core'

import { useStores } from 'lib/hooks/useStores'

import { SplashScreenContainer } from './styles'

import type { NavigationProp } from 'navigations/types/common'
import type { RootStackParamList } from 'navigations/types'

const SplashScreen: React.FC = () => {
  const { appStore } = useStores()
  const { isLoading } = appStore
  const { user } = appStore.userStore
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  console.log({ isLoading, user })

  React.useEffect(() => {
    if (!isLoading) {
      if (user) {
        navigation.replace('Home')
      } else {
        navigation.replace('Auth', { screen: 'Login' })
      }
    }
  }, [isLoading])

  return (
    <SplashScreenContainer>
      <Text>SplashScreen</Text>
    </SplashScreenContainer>
  )
}

export default observer(SplashScreen)
