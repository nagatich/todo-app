import styled from 'styled-components/native'

import { mp, normalize } from 'lib/utils/normalize'

import type { HeaderContainerProps } from './types'

export const HeaderContainer = styled.View<HeaderContainerProps>`
  padding-top: ${({ insets }) => normalize(insets.top, true)};
  background: ${({ theme }) => theme.bgColor.base};
`

export const HeaderContentContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => mp(theme.padding.container.min)};
  justify-content: space-between;
`
