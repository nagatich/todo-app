import * as React from 'react'
import { Text } from 'react-native'

import Input from 'components/common/Input'
import Button from 'components/common/Button'
import MainLayout from 'components/layout/MainLayout'

const LoginScreen: React.FC = () => {
  const [value, setValue] = React.useState('')

  return (
    <MainLayout>
      <Text>LoginScreen</Text>
      <Input
        value={value}
        onChange={(e) => setValue(e.nativeEvent.text)}
        label="pepega"
      />
      <Button
        text="button"
        vibrate
        // disabled
        // isLoading
      />
    </MainLayout>
  )
}

export default LoginScreen
