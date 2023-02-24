import * as React from 'react'
import { ActivityIndicator } from 'react-native'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

import Text from '../Text'

import { ButtonContainer } from './styles'

import type { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabled,
  isLoading,
  vibrate,
  type = 'primary',
}) => {
  const onButtonPress = React.useCallback(() => {
    onPress?.()

    if (vibrate) {
      ReactNativeHapticFeedback.trigger('impactMedium', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: true,
      })
    }
  }, [onPress, disabled, isLoading])

  return (
    <ButtonContainer
      disabled={disabled || isLoading}
      onPress={onButtonPress}
      type={type}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text>{text}</Text>
      )}
    </ButtonContainer>
  )
}

export default React.memo(Button)
