import styled from 'styled-components';


const Container=styled.div`
display: flex;
min-height: 100vh;
max-height: 100vh;
user-select: none;
@media(max-width:900px){
    flex-direction: column;
}
`


const Column= styled.div`
flex-basis: 50%;
overflow-y: scroll;
@media(max-width:900px){
    flex-basis: 100%;
    overflow-y: visible;
}
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
        cursor: pointer;
    }
    .next:disabled{
        background: gray;
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
@media(max-width:900px){
    flex-basis: 100%;
    margin: 20px auto;
}

`
const QuestionCode= styled.div`
    margin: 20px 0 20px 50px;
    margin-left: 50px;
color: black;
font-size: 14px;
margin-top: 20px;
margin-bottom: 20px;
border: 1px dotted gray;
padding: 4px;
width: 85%;
background:lightgray;
border-radius: 4px;
overflow-x: auto;
@media(max-width:900px){
    flex-basis: 100%;
    margin: 20px auto;
}
    pre{
        width: 100%;
        
    }
    code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    
}
    
    

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
cursor: pointer;

span{
    color:black;
    font-size: 14px;
}
.sn{
    font-size: 2rem;
    font-weight: 700;
    color:gray;
    padding-left: 10px;
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
const OptionCode=styled.div`
 /* text-align: left; */
 margin: 0;
 padding: 0;
 font-size: 14px;
 display: inline-block;
 background-color:lightgray;
 color:black;
 padding: 10px;
 width: 100%;
 overflow-x: auto;
 border-radius: 4px;
`

export {Container, Column, Question, Timer,Section, Option, QuestionCode, OptionCode};