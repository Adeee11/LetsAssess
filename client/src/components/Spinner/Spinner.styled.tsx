import styled from 'styled-components';



const SpinnerContainer= styled.div`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({theme})=>theme.pellete.primary};
    .loader {
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3b4851;
  width: 35px;
  height: 35px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`


export default SpinnerContainer;