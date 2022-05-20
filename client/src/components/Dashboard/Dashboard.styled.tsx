import styled from 'styled-components';

const Container=styled.div`
background: rgb(244,245,250);
display:flex ;
flex-direction: row;
flex-wrap: wrap;
min-height: calc(100vh - 50px);
padding-bottom   :40px ;
padding-top: 40px;
margin-top: 125px;
padding-left: auto;
padding-right: auto;
`

const TopNavBar= styled.header`
    top:0;
    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.pellete.primary};
    box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
    margin-bottom: 10px;
    box-sizing: border-box;
    
  `
  const UpperNavBar=styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(58, 53, 65, 0.12);
    max-width: 1392px;
    margin-left: auto;
    margin-right: auto;

    img{
      max-width: 120px;
    }
    .right{
        display: flex;
        align-items: center;

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
        background-image: linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%);
    }
  `
  const LowerNavBar= styled.div`
     max-width: 1392px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .dashboard{
        display: flex;
        align-items: center;
        box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
        background-image: linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%);
        padding: 9px 0;
        border-radius: 21px;
        color: white;
        border: none;
        font-size: 16px;
        cursor: pointer;
        min-width: 194px;
        justify-content: center;
        svg{
            
          width      :20px ;
          path{
              fill: white;
          }
        }
    }
    .list{
        /* border: 1px solid yellow; */
        cursor: pointer;
        display: none;
        position: absolute;
  
       padding :10px ;
       list-style: none;
       min-width: 192px;
       margin-top: -20px;
  
       li{
        background-color: ${props => props.theme.pellete.primary};
        padding :9px ;
        cursor: pointer;
        transition: 0.3s ease;

       }
       .first{
           border-radius: 4px 4px 0 0;
           margin-top: 30px;
  
       }
       .last{
        border-radius: 0px 0px 4px 4px;
       }
       li:hover{
           background-color: #eee8e8;
       }
    }
    .dashboard-wrapper{
       
    }
    .dashboard-wrapper:hover .list{
       display: block;
    }
    
    .link2{
        
        /* border:1px solid red; */
        margin-left: 50px;
        .list{
            padding-top: 10px;
            /* margin-left: -20px; */
            /* transition: 0.3s; */
        }
        
        span{
            text-align: center;
            display: block;
            width: 100%;
            padding: 9px 15px;
            border-radius :20px ;
            cursor: pointer;
            transition: 0.3s ;
            /* border :1px solid black ; */
        }
        

    }

    .link2:hover .list{
        display: block;
    }
  `
  const TheDashBoard= styled.div`
      background: rgb(244,245,250);
  `
export {Container, TopNavBar, UpperNavBar, LowerNavBar,TheDashBoard };