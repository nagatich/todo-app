import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from 'screens/auth/LoginScreen'

import type { AuthStackParamList } from './types'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'fade',
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
    />
  </Stack.Navigator>
)

export default AuthStack
