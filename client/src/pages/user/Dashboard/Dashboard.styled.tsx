import styled from 'styled-components';

const Container= styled.div`
   
    margin-top: 125px;
    min-height: calc(100vh - 125px);
    background-color: ${({theme})=>theme.pellete.background};
   
   
`
type propType={
    isFlex?:boolean
}
const Card= styled.div<propType>`
    display :${({isFlex})=>isFlex?"flex":""};
    align-items: center;
    font-size: 14px;
    text-align: center;
    width: 100%;
    padding: 10px;
    width:100%;
    background-color:${({theme})=>theme.pellete.primary};
    margin: 0 auto;
    width:100% ;   
    border-radius: 6px;
    box-shadow:  ${({theme})=>theme.boxShadow.card};
    color: rgba(58, 53, 65, 0.87);

    cursor: pointer;
    span{
        padding: 10px;
    }
    img{
        width: 100px;
        height: 100px;
        padding: 20px;
        object-fit: contain;
        
    }
    .img{
        border-radius: 50%;
        padding: 0px;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .right{
     
        text-align: left;
    }
    @media (max-width:768px){
     margin-left: auto;
     margin-right: auto;
}
    span{
        display: block;
    }

    
`

const CandidateDetails= styled.div`
    padding: 10px;
    font-size: 14px;
    display: flex;
    border-bottom: 1px solid lightgray;
    span{
        margin-left:10px ;
    }
`

const Submissions= styled.div`
border-radius: 7px;
max-width: 800px;
margin: 0 auto;
font-size: 16px;
padding-bottom: 40px;
/* box-shadow:2px 4px 4px 2px rgba(0, 0, 0, 0.2); */
.marks{
    margin-left: auto;
    margin-right: auto;
    display: block;
    /* background-color: red; */
    text-align: center;
    padding-right: 20px;
    padding-top: 20px;
    /* color: gray; */
    letter-spacing: 1px;
    font-size: 20px;
    
}
.section{
    width: 100%;
    box-shadow:2px 4px 4px 2px rgba(0, 0, 0, 0.2);;
    border-color: #baafafdf;
    padding: 20px;
    background: ${({theme})=>theme.pellete.primary};
    margin-top: 40px;
  
}
.right{
       background-color :lightgreen ;
       font-weight: 700;
       
    }
    pre{
     
      
    }
`

const Question = styled.div`
padding: 20px;
span{
    margin-right: 10px;
}
.marks-right, .marks-wrong{
    color:green;
    margin-left: 20px;
    font-size: 25px;
   
}
.marks-wrong{
    color:red;
    font-size: unset;
}
    
`
const Option = styled.div`
    width: auto;
    margin-left: 35px;
    border:  1px solid black;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 70%;
    border:1px solid lightgray;
    @media(max-width:768px){
        width:80%;
    }
    pre{
        margin: 0;
    }
    
    
`

const CorrectOption= styled.div`
    color:${({theme})=>theme.pellete.success};
    /* border:1px solid black; */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    margin-left: 35px;
    width: 70%;
    @media(max-width:768px){
        width: 80%;
    }
    span{
       /* content:"."; */
       margin: 0;
    }
    .codes{
        border:1px solid ${({theme})=>theme.pellete.success};
        padding: 5px;
        padding-right: 0;
        width: 100%;
        @media(max-width:768px){
        width: 100%;
    }
        border-radius: 4px;
    }
    .pre{
        width: 100%;
        background:#f5f2f0;
     
        
    }
`
export { Container, Card, CandidateDetails, Question, Option, Submissions, CorrectOption};