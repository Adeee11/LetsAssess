import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <div className='container text-center'>
        <span> IWEBCODE
        &#169;
         Copyright 2022 all rights reserved
        </span>
      </div>
    </FooterContainer>
  )
}

export default Footer


const FooterContainer= styled.footer`
  background-color: ${({theme})=>theme.pellete.primary};
  color:${({theme})=>theme.pellete.psecondary};
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;;
`

