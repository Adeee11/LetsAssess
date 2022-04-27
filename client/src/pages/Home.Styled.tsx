import styled from "styled-components";

const Container= styled.form`
width:700px;
margin: 0 auto;
padding: 30px;
background: white;
border-radius: 5px;
margin-top: 50px;
box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

.input-box{
    margin: 0 auto;
    width:80%;
    /* border:1px solid black; */
   margin-bottom: 30px;
   margin-top: 30px;
}
/* input{
    padding: 6px;
    border-radius: 4px;
    border: 1px solid gray;
    min-width: 400px;
    outline: none;
    @media (max-width:768px){
        min-width: auto;
        width: 100%;
    }
} */
span{
    min-width: 70px;
    display: inline-block;
    font-size: 16px;
    color: gray;
    @media(max-width:768px){
        margin-bottom: 10px;
    }
}

@media (max-width:768px){
    width: 80vw;
    padding: 10px;
    
}

    
`

export {Container};