import MaterialIcons from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json'

import type { TextStyle } from 'react-native'

export interface IconProps {
  name: keyof typeof MaterialIcons
  onPress?: () => void
  style?: TextStyle
  size?: number
}
