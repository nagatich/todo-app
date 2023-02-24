import { NativeSyntheticEvent, TextInputChangeEventData, TextStyle, ViewStyle } from 'react-native'

export interface InputProps {
  value: string
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  style?: ViewStyle
  inputStyle?: TextStyle
  label?: React.ReactNode
}
