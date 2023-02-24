import { Text } from 'react-native'
import styled from 'styled-components/native'

import { normalize } from 'lib/utils/normalize'

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => normalize(theme.fontSize.middle, true)};
  color: ${({ theme }) => theme.textColor.base};
`
