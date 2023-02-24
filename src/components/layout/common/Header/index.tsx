import * as React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'

import Text from 'components/common/Text'
import Icon from 'components/common/Icon'

import { HeaderContainer, HeaderContentContainer } from './styles'

const Header: React.FC = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const onBackPress = React.useCallback(
    () => {
      if (navigation.canGoBack()) {
        navigation.goBack()
      }
    },
    [navigation],
  )

  return (
    <HeaderContainer insets={insets}>
      <HeaderContentContainer>
        <Icon
          name="arrow-left"
          size={24}
          style={{
            color: 'black',
          }}
          onPress={onBackPress}
        />
        <Text>kek</Text>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header
