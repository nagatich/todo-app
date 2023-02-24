export interface ButtonProps {
  text?: React.ReactNode
  onPress?: () => void
  disabled?: boolean
  isLoading?: boolean
  vibrate?: boolean
  type?: ButtonType
}

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
