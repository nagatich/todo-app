import styled from 'styled-components/native'
import { TextInput as RNTextInput } from 'react-native'

import { normalize } from 'lib/utils/normalize'

export const InputContainer = styled.View`
  
`

export const TextInputContainer = styled.View`
  border: ${({ theme }) => normalize(theme.border.smallest, true)} solid;
  border-radius: ${({ theme }) => normalize(theme.borderRadius.small, true)};
  padding: ${({ theme }) => normalize(theme.padding.container.smaller, true)};
`

export const TextInput = styled(RNTextInput)`
  color: ${({ theme }) => theme.textColor.base};
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => normalize(theme.fontSize.middle, true)};
`
