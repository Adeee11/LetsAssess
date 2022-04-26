import React from 'react'
import { ButtonContainer } from './Button.styled'
type propType={
    type:"button" | "submit" | "reset" | undefined,
    value:string
}
const Button = ({type, value}:propType) => {
  return (
      <ButtonContainer type={type} >
             {value}
      </ButtonContainer>

  )
}

export default Button