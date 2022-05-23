import styled from 'styled-components';



const TopNavBar = styled.header`
    top:0;
    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.pellete.primary};
    box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
    margin-bottom: 10px;
    box-sizing: border-box;
    
    .borderbottom{
        border-bottom: 1px solid rgba(58, 53, 65, 0.12);
    }
    .boxshadow{

    }
  `
const UpperNavBar = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px 0px;
    img{
      max-width: 120px;
    }
    .right{
        display: flex;
        align-items: center;
        color:${(props) => props.theme.pellete.secondary};
    }
    .avatar{
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
        text-transform: uppercase;
        background-image: ${(props) => props.theme.pellete.main};
        color:${(props) => props.theme.pellete.primary};
    }
  `
const LowerNavBar = styled.div`
   
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .time{
        display: flex;
        align-items: center;
        color:${(props) => props.theme.pellete.secondary};
        
    }
    .dashboard{
        display: flex;
        align-items: center;
        box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
        background-image: ${(props) => props.theme.pellete.main};
        padding: 9px 0;
        border-radius: 21px;
        color:${(props) => props.theme.pellete.primary};
        border: none;
        font-size: 16px;
        min-width: 194px;
        justify-content: center;
        svg{
         width :20px ;
          path{
              fill: white;
          }
        }
    }
    
  `
const TheDashBoard = styled.div`
      background:${({ theme }) => theme.pellete.background};
      min-height: calc(100vh - 125px);
      width: 100%;
      height: 100%;
  `


export { TopNavBar, UpperNavBar, LowerNavBar, TheDashBoard };