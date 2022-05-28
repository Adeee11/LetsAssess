import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'

const StyleGuide = () => {
  return (
    <TheStyleGuide>
      <div className='container-fluid header' >
        <div className='container'>
          <div className='row pt-3 pb-3 ' >
            <div className='col col-sm-3 col-md-3 col-lg-2'><img src="/images/logo.png" alt="IWEBCODE" className='logo' /></div>
            <div className='col col-sm-3 col-md-3 col-lg-1' >
              <NavLink
                to="/styleguide" >
                Colors
              </NavLink>
            </div>
            <div className='col col-sm-3 col-md-3 col-lg-1' >
              <NavLink
                to="/styleguide/elements">
                Elements
              </NavLink>
              </div>
              <div className='col col-sm-3 col-md-3 col-lg-1'>
              <NavLink
                to="/styleguide/layout" >
                Layout
              </NavLink>
            </div>
          </div>
          
          
        </div>
      </div>

      <Outlet />
    </TheStyleGuide>
  )
}

export default StyleGuide;


const TheStyleGuide = styled.div`
 min-height: 100vh;
 background-color: ${({ theme }) => theme.pellete.background};
 .header{
     background-color: ${({ theme }) => theme.pellete.primary};
     box-shadow: ${({ theme }) => theme.boxShadow.header};
     
 }
 a{
     text-decoration: none;
     color:gray;
     font-weight: 700;
     font-size: 16px;
     transition: 0.3s;
     width: 100%;
     height: 100%;
     display: flex;
     align-items  :center ;
     justify-content: center;
 }
 
 a:hover  {
   color:${({ theme }) => theme.pellete.purple} ;
 }
 .logo{
   width: 100px;
 }
 .act{
  color:${({ theme }) => theme.pellete.purple} ;
 }
 
`