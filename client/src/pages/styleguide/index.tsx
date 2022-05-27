import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'

const StyleGuide = () => {
  return (
    <TheStyleGuide>
        <div className='container-fluid header' >
        <div className='container'>
            <div className='row pt-3 pb-3' >
                <div className='col-2'><NavLink to="/styleGuide" >Colors</NavLink></div>
                <div className='col-2'><NavLink to="/styleguide/elements">Elements</NavLink></div>
            </div>
        </div>
        </div>

      <Outlet/>
    </TheStyleGuide>
  )
}

export default StyleGuide;


const TheStyleGuide= styled.div`
 min-height: 100vh;
 background-color: ${({theme})=>theme.pellete.background};
 .header{
     background-color: ${({theme})=>theme.pellete.primary};
     box-shadow: ${({theme})=>theme.boxShadow.header};
     
 }
 a{
     text-decoration: none;
     color:gray;
     font-weight: 700;
     font-size: 16px;
     transition: 0.3s;
 }
 
 a:hover  {
   color:${({theme})=>theme.pellete.purple} ;
 }
 
 
`