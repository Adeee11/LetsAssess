import styled from 'styled-components';

const Container=styled.div`
background: #fafafa;
justify-content: space-between;
display:flex ;
flex-direction: row;
/* align-items: center; */
flex-wrap: wrap;
min-height: calc(100vh - 50px);
:last-child{
 margin-bottom   :40px ;
}

`

const Card= styled.div`

text-align: center;
overflow: hidden;
margin-top: 40px;
flex-basis: 33%;
@media(max-width: 768px){
    flex-basis: 50%;
}
@media(max-width: 550px){
    flex-basis: 100%;
}
.data{
    background-color: white;
    margin: 0 auto;
    max-width:150px ;      
    border-radius: 4px;
    box-shadow: 1px 1px 1px hsl(0deg 0% 80% / 45%);
    padding: 40px 10px 20px;
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
}  
p{
    margin: 0;
    color: gray;
    /* padding: 10px; */
    font-size: 16px;
    
}
span{
  
    font-size: 14px;
}
}


    
`
export {Container, Card};