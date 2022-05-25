import styled from 'styled-components';

const Wrapper=styled.div`
    background-color: transparent;
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: #544e4ea3;
`

const Box=styled.div`
    position: fixed;
    width:300px;
    height: 200px;
    background:${({theme})=>theme.pellete.primary};
    border-radius: 5px;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-150px, -100px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-direction: column;
    justify-content: space-evenly;
    color: ${({theme})=>theme.pellete.secondary};
    box-shadow:${({theme})=>theme.boxShadow.card};
    button{
        padding: 5px 20px;
        background-image: ${(props)=>props.theme.pellete.main};
        color: white;
        border-radius: 4px;
        cursor: pointer;
        border:none;
    }
`

export {Wrapper, Box};