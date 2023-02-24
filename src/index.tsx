import 'react-native-gesture-handler'
import * as React from 'react'
import {
  StatusBar,
  useColorScheme,
} from 'react-native'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'mobx-react'

import themes from 'theme'
import RootStack from 'navigations'
import stores from 'stores'

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Provider {...stores}>
      <ThemeProvider theme={!isDarkMode ? themes.darkTheme : themes.defaultTheme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
