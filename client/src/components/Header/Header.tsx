import React, { useContext, useState } from 'react'

import { GlobalContext } from '../../GlobalContext/GlobalContextProvider';
import { LowerNavBar, TopNavBar, UpperNavBar } from './Header.styles'
type propTypes={
user:string;
info:string
}
const Header = ({user,info}:propTypes) => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const {discardAdmin} = useContext(GlobalContext)
  
  const logoutHandler=()=>{
  
     discardAdmin(); 
  }
  return (
    <TopNavBar>
        <div className="container-fluid border-bottom" >
          <div className="container">
            <UpperNavBar>
              <img src="/images/logo.png" alt="iwebcode" />
              <div className="right">
                <div className="avatar" onClick={()=>setShowLogoutMenu(!showLogoutMenu)}>
                  {user[0]}
                </div>
                <span>{user}</span>
                {showLogoutMenu &&<span className='logout' >
                  <ul>
                    <li>Help</li>
                    <li>Admin Guide</li>
                    <li>Setting</li>
                    <li onClick={logoutHandler}>Logout</li>
                  </ul>
                  </span>}
              </div>
            </UpperNavBar>
          </div>
        </div>
        <div className="container-fluid boxshadow">
          <div className="container">
            <LowerNavBar>
              <div className="dashboard-wrapper">
                <div className="dashboard" >
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8j4zn5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeOutlineIcon"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"></path></svg>
                  <span>Dashboard</span>
                </div>
              </div>

              <span className='info'>
                 {info}   
              </span>
              
            </LowerNavBar>
          </div>
        </div>
      </TopNavBar>
  )
}

export default Header
