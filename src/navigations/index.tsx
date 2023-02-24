import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from 'screens/SplashScreen'
import Home from 'components/Home'

import AuthStack from './AuthStack'

import type { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack: React.FC = () => {
  console.log('rootstack')
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
      />
    </Stack.Navigator>
  )
}

export default RootStack
