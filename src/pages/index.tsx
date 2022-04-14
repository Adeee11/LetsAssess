import React from 'react'
import { Container } from './Home.Styled';

const index = () => {
  return (
    <Container>

      <div className='input-box'>
        <span>Email</span>
        <input type="text" />
      </div>

      <div className='input-box'>
        <span>Name</span>
        <input type="text" />
      </div>
      <button>Submit</button>
    </Container>
  )
}

export default index