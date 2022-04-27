import styled from 'styled-components';

const InputContainer = styled.input`

    padding: 6px;
    border-radius: 4px;
    border: 1px solid gray;
    min-width: 400px;
    outline: none;
    @media (max-width:768px){
        min-width: auto;
        width: 100%;
    }
` 



export {InputContainer};