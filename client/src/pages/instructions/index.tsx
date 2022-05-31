import React, { useContext, useState} from 'react'
import styled from 'styled-components'
import Instructions from '../../components/Instructions/Instructions';
import {GlobalContext} from '../../GlobalContext/GlobalContextProvider';
// import MyTimer from '../../components/MyTimer/MyTimer';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';

const InstructionsComponent = () => {
  const [showLoader, setShowLoader] = useState(false)  
  const nav = useNavigate();    
  const ctx = useContext(GlobalContext);
    const { candidate,
        setToken,
        url
    } = ctx;
     
    const clickHandler=()=>{
         setShowLoader(true); 
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            email: candidate.email,
            candidateName: candidate.name,
          });

        fetch(`${url}/authenticate`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          })
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              setToken(result.token);
              sessionStorage.setItem('showInstructions', 'no');
              setShowLoader(false)
              nav('/assessment',{replace:true})
              
            })
            .catch((error) => {
                setShowLoader(false);
                console.log("error", error)
            });
    
    }
    return (
    <>
       {showLoader && <Spinner/>}
       {!showLoader && <TheInstructions className="the-dashboard">
          <TopNavBar>
            <div className="container-fluid border-bottom">
              <div className="container">
                <UpperNavBar>
                  <img src="/images/logo.png" alt="iwebcode" />
                  <div className="right">
                    <div className="avatar">{candidate && candidate.name[0]}</div>
                    <span>{candidate && candidate.name}</span>
                  </div>
                </UpperNavBar>
              </div>
            </div>
            <div className="container-fluid boxshadow">
              <div className="container">
                <LowerNavBar>
                  <div className="dashboard-wrapper">
                    <div className="dashboard">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8j4zn5"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="HomeOutlineIcon"
                      >
                        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"></path>
                      </svg>
                      <span>Dashboard</span>
                    </div>
                  </div>

                
                </LowerNavBar>
              </div>
            </div>
          </TopNavBar>
           <Instructions onClose={()=>clickHandler()}/>
          </TheInstructions>}
    </>
  )
}

export default InstructionsComponent


const TheInstructions= styled.div`
background-color    :${({theme})=>theme.pellete.background} ;
`

const TopNavBar = styled.header`
    top:0;
    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.pellete.primary};
    box-shadow:${({theme})=>theme.boxShadow.header};
    margin-bottom: 10px;
    box-sizing: border-box;
    
    .borderbottom{
        border-bottom: 1px solid rgba(58, 53, 65, 0.12);
    }
    .boxshadow{

    }
  `
const UpperNavBar = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px 0px;
    img{
      max-width: 120px;
    }
    .right{
        display: flex;
        align-items: center;
        color:${(props) => props.theme.pellete.secondary};
    }
    .avatar{
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
        text-transform: uppercase;
        background-image: ${(props) => props.theme.pellete.main};
        color:${(props) => props.theme.pellete.primary};
    }
  `
const LowerNavBar = styled.div`
   
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .time{
        display: flex;
        align-items: center;
        color:${(props) => props.theme.pellete.secondary};
        
    }
    .dashboard{
        display: flex;
        align-items: center;
        box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
        background-image: ${(props) => props.theme.pellete.main};
        padding: 9px 0;
        border-radius: 21px;
        color:${(props) => props.theme.pellete.primary};
        border: none;
        font-size: 16px;
        min-width: 194px;
        justify-content: center;
        svg{
         width :20px ;
          path{
              fill: white;
          }
        }
    }
    
  `