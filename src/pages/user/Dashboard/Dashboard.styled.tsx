import styled from 'styled-components';

const Container= styled.div`
    max-width:950px ;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    @media (max-width:768px){
      max-width   :none ;
      width: 100%;
}
`
const Card= styled.div`
    border-radius: 4px;
    padding: 20px;
    display:inline-block;
    margin-left: 30px;
    margin-bottom: 30px;
    margin-top: 30px;
    box-shadow:2px 4px 4px 2px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    text-align: center;
    width: 200px;
    height: 100px;
    cursor: pointer;
    span{
        padding: 10px;
    }
    img{
        width: 50px;
    }
    @media (max-width:768px){
     margin-left: auto;
     margin-right: auto;
}
    span{
        display: block;
    }

    
`
const Header= styled.ul`
    
    list-style: none;
    border-bottom: 1px solid lightgray;
    color:gray;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

.avatar{
    margin-right:30px ;
        width: 40px ;
        height:40px;
        border-radius: 50%;
        background-color: blue;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
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
box-shadow:2px 4px 4px 2px rgba(0, 0, 0, 0.2);
.right{
       background-color :lightgreen ;
       font-weight: 700;
       
    }
    pre{
        overflow-x: auto;
        background-color: #d1cfcff1;
        padding: 20px;
        color:black;
        border-radius: 4px;
      
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
    width: 50%;
    border:1px solid lightgray;
    @media(max-width:768px){
        width:80%;
    }
    pre{
        background-color: transparent;
        border: none;
        margin: 0;
    }
    
    
`
export { Container, Card, Header, CandidateDetails, Question, Option, Submissions};