import React from 'react'
import styled from 'styled-components'



const ColorsList=[
    {
     title:"primary",
     value:"rgb(253,254,254)",
     code:"{({theme})=>theme.pellete.primary}"
    },
    {
       title:"secondary",
       value:"rgba(58, 53, 65, 0.87)",
       code:"{({theme})=>theme.pellete.secondary}" 
    },
    {
        title:"main",
        value:"linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)",
        code:"{({theme})=>theme.pellete.main}"
    },
    {
        title:"success",
        value:"rgb(20, 230, 83)",
        code:"{({theme})=>theme.pellete.success}"
    },
    {
        title:"background",
        value:"rgb(244,245,250)",
        code:"{({theme})=>theme.pellete.background}"
    },
    {
      title:"purple",
      value:"rgb(145, 85, 253)" ,
      code:"{({theme})=>theme.pellete.purple}" 
    }  
]



const Colors = () => {
  return (<TheColors className='container-fluid'>
      <div className='container' >
<div className='row ' >
    {
        ColorsList.map((color, index)=>(<div className='mt-3 col-sm-12 col-md-6 col-lg-4'>
        <ColorBox boxColor={color.value}
        style={{background:`${color.value}`}} 
        onClick={()=> navigator.clipboard.writeText('$'+color.code)}
        >
           <span>Click to copy</span>
        </ColorBox>
         {color.title}
         </div>
        ))
    }
    </div>
    </div>
  </TheColors>)
}

export default Colors

type propType={
    boxColor:string
}
const ColorBox= styled.div<propType>`
   height:80px;
   border-radius: 7px;
   background: ${(props)=>props.boxColor};
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   border: 0.5px solid ${({theme})=>theme.pellete.background};
   span{
       display: none;
       width: 100%;
       text-align: center;
       height: inherit;
       align-items: center;
       justify-content: center;
       background-color: #6e6767a0;
       color:${({theme})=>theme.pellete.primary};
   }
   &:hover span{
       display: flex;
       
   }
   
`

const TheColors= styled.div`
 /* width   :100px ; */
 /* height: 50px; */
`