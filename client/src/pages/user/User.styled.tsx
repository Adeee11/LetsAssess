import styled from 'styled-components';

const Container = styled.div`
min-height :90vh ;
display: flex;
align-items: center;
justify-content: center;

`
const Form= styled.div`
     min-width:500px;
     padding   :20px ;
     box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2);
     border-radius: 10px;

     @media (max-width:768px){
        min-width :auto ;
        width: 90%;
     }
`

const Input= styled.div`
display: flex;
align-items: center;
padding: 20px;
@media (max-width:768px){
       flex-direction: column;
       align-items: flex-start;
       span{
           width: 100%;
           margin-bottom: 10px;
       }
       input{
           width: 100%;
       }
     }
span{
    min-width: 100px;
    display: inline-block;
    /* flex: 0; */
    font-size: 16px;
}
input{
    /* width: 100%; */
    padding: 10px;
    border-radius: 2px;
    border: 1px solid gray;
    flex: 1;
    font-size: 16px;
    outline: none;
}
   
`

const Button = styled.button`
margin: 0 auto;
display: block;
padding: 6px 30px;
background: black;
color: white;
border-radius: 4px;
font-size: 16px;
margin-top: 20px;
/* margin-bottom: 20px; */
`
const Menu= styled.div`
    padding: 10px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span{
        font-size: 14px;
        margin-right: 10px;
        color: gray;
        cursor: pointer;
    }
    button{
        /* margin-left: auto; */
        display: block;
        background: #676060dc;
        border: none;
        color: white;
        border-radius: 4px;
        padding: 6px 12px;
    }
`
export {Container, Form , Input, Button, Menu};