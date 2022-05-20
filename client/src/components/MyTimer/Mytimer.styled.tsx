import styled from 'styled-components';

const Timer = styled.div`
    margin: 0;
    padding: 0;
    padding: 10px;
    justify-content: flex-end;
    height: 25px;
    display: flex;
    align-items: center;
    
    

  span{
      font-size: 18px;
      color:${(props)=>props.theme.pellete.secondary};
      
  }

  svg{
    font-size: 23px;
    margin-right: 10px;
    path{
      /* fill:rgb(198, 167, 254); */
    }
  }
`



export { Timer };