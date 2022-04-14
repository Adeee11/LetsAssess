import styled from 'styled-components';


const Container=styled.div`
display: flex;
min-height: 100vh;
max-height: 100vh;
`


const Column= styled.div`
flex-basis: 50%;
overflow-y: scroll;
.logo,.subject, .description{
    margin-left: 50px;
}
.logo{
    font-weight: 700;
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 40px;
}
.subject{
    font-size: 16px;
    color:gray;
    font-weight: 700;
}
.description{
    font-size: 16px;
    color: gray;
}
header{
    display: flex;
    align-items: center;
    justify-content  :space-evenly ;
    .next{
        font-size: 16px;
        padding: 6px 10px;
        background: black;
        color: white;
        border-radius: 4px;
        min-width: 126px;
    }
}
`

const Question= styled.div`
margin-left: 50px;
color: black;
font-size: 14px;
margin-top: 20px;
margin-bottom: 20px;
border: 1px dotted gray;
padding: 4px;
width: 85%;

`

const Timer = styled.div``

const Section=styled.div`
.act{
    color:black;
    border:1px solid black;
    .sn{
        color: skyblue;
    }
}    
`
const Option= styled.div`
width: 70%;
margin: 0 auto;
border:1px solid gray;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
margin-bottom: 20px;
border-radius: 4px;

span{
    color:gray;
    font-size: 14px;
}
.sn{
    font-size: 2rem;
    font-weight: 700;
    color:gray;
}
&:hover{
    border-color:black;
:first-child{
    
    color:black;
}
.sn{
    /* color:gray; */
}
}
`
export {Container, Column, Question, Timer,Section, Option};