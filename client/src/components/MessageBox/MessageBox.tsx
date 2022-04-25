import React from 'react'
import { Box, Wrapper } from './MessageBox.styled'
type propType={
  msg?:string
  clickHandler:()=>void
}
const MessageBox = ({msg, clickHandler }:propType) => {
  return (
    <Wrapper>
         <Box>
           <p>{msg}</p>
         <button onClick={()=>clickHandler()}>OK</button>
         </Box>
         
    </Wrapper>
    
  )
}

export default MessageBox