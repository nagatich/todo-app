import * as React from 'react'
import { Text, View } from 'react-native'
// import { useTheme } from 'styled-components'

const Home: React.FC = () => {
  // const theme = useTheme()
  // console.log({ theme })
  console.log('home')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red', flex: 1 }}>kek</Text>
    </View>
  )
}

export default Home
