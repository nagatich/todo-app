import * as React from 'react'

import Text from 'components/common/Text'

import { TextInputContainer, TextInput, InputContainer } from './styles'

import type { InputProps } from './types'

const Input: React.FC<InputProps> = ({ value, onChange, inputStyle, label }) => {
  console.log({ value })

  return (
    <InputContainer>
      {label && <Text>{label}</Text>}
      <TextInputContainer>
        <TextInput
          value={value}
          onChange={onChange}
          style={inputStyle}
        />
      </TextInputContainer>
    </InputContainer>
  )
}

export default Input
