import * as React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import type { IconProps } from './types'

const Icon: React.FC<IconProps> = ({ name, style, onPress, size }) => (
  <MaterialCommunityIcons
    name={name}
    size={size}
    onPress={onPress}
    style={style}
  />
)

export default Icon
