import React from 'react'
import { ButtonContainer } from './Button.styled'
type propType={
    type:"button" | "submit" | "reset" | undefined,
    value:string,
    color?:string,
}
const Button = ({type, value, color}:propType) => {
  return (
      <ButtonContainer type={type} className={color}>
             {value}
      </ButtonContainer>

  )
}

export default Button