import styled from 'styled-components';

const CardContainer= styled.div`

    padding: 10px;
    width:100%;
    background-color:${({theme})=>theme.pellete.primary};
    margin: 0 auto;
    width:100% ;   
    border-radius: 6px;
    box-shadow:  ${({theme})=>theme.boxShadow.card};
    color: rgba(58, 53, 65, 0.87);
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
   width  :100px ;
   height: 100px;
   object-fit: contain;
   padding  :20px ;

} 
.start{
    cursor: pointer;
    display: flex;
    
    background-image: ${(props)=>props.theme.pellete.main};
    padding: 5px 20px;
    margin-top: 10px;
    border-radius: 21px;
    color: white;
    
    span{
        /* border:1px solid black; */
    }
    
    .arrow{
        align-items: center;
        display: flex;
        margin-left: 5px;
        /* font-size: 25px; */
        /* border:1px solid black; */
    }
} 
.completed{
    display: flex;
    align-items: center;

    svg{
        margin-top: -5px;
        /* border:1px solid black; */
    }
}
.complete{
    
    cursor: initial;
    /* color:green; */
    color: ${(props)=>props.theme.pellete.success};
    font-size: 30px;
}
.c-text{
    
    font-size: 16px;
} 
p{
    margin: 0;
    color: gray;
    font-size: 16px;
    
}
span{
  
    font-size: 14px;
}

.est{
    color:#ada9a9;;
   
}
    
`

export {CardContainer}