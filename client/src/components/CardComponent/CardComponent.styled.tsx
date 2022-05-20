import styled from 'styled-components';

const CardContainer= styled.div`
/* padding: 10px; */
box-sizing: border-box;
text-align: center;
overflow: hidden;
padding-top: 20px;
padding-bottom: 20px;
flex-basis: 33%;
padding: 10px;
@media(max-width: 768px){
    flex-basis: 50%;
}
@media(max-width: 550px){
    flex-basis: 100%;
}
.data{
    background-color: white;
    margin: 0 auto;
    width:80% ;      
    border-radius: 15px;
    box-shadow: 1px 1px 1px hsl(0deg 0% 80% / 45%);
    padding: 40px 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
    width:50px;
    height: 50px;
    object-fit: contain;
    padding  :20px ;

} 
.start{
    cursor: pointer;
    padding: 0px;
    color: blue;
    box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
        background-image: linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%);
        padding: 5px 20px;
        
        margin-top: 10px;
        border-radius: 21px;
        color: white;
} 
.complete{
    cursor: initial;
    /* color:green; */
    background-image: linear-gradient(98deg, rgba(167, 254, 186, 0.808), rgb(20, 230, 83) 94%);
} 
p{
    margin: 0;
    color: gray;
    font-size: 16px;
    
}
span{
  
    font-size: 14px;
}
}
    
`

export {CardContainer}