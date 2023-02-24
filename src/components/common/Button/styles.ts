import styled, { css, DefaultTheme, ThemeProps } from 'styled-components/native'

import { mp, normalize } from 'lib/utils/normalize'

import type { ButtonProps, ButtonType } from './types'
import type { FlattenInterpolation } from 'styled-components'

export const ButtonContainer = styled.TouchableOpacity<Partial<ButtonProps>>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => normalize(theme.borderRadius.small, true)};
  padding: ${({ theme }) => mp(theme.padding.container.small, theme.padding.container.small)};
  ${({ disabled, theme }) => disabled && css`
    background: ${theme.button.bgColor.secondary};
  `};
  ${({ type }) => type && buttonTypes[type]};
`

const buttonTypes: Record<ButtonType, FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  primary: css`
    background: ${({ theme }) => theme.button.bgColor.primary};
  `,
  secondary: css`
    background: ${({ theme }) => theme.button.bgColor.secondary};
  `,
  success: css`
    background: ${({ theme }) => theme.button.bgColor.success};
  `,
}
