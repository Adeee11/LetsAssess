import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import { Card, Container } from './Dashboard.styled'
import { useNavigate } from 'react-router-dom';
import MyTimer from '../MyTimer/MyTimer'
import { GlobalContext } from '../../App';





const DashBoard = () => {
    
    
    const [data, setData] = useState<{durationInMins:number, title:string}[]>([])
   
    const nav = useNavigate();
    const ctx = useContext<any>(GlobalContext);
    const time2= ctx.startTime2
    const time = ctx.time;
    const flag= ctx.flag;
    const setFlag= ctx.setFlag;
    
      console.log(time);
    const imageSrc=(title:string)=>{
          if(title=="JavaScript")
             return "/images/js.png"
          else if(title=="HTML and CSS")
              return "/images/html.png"   
    }
    
    
    const clickHandler = (arg: string) => {
        setFlag(true)
        if(flag==false){
            time2();
        }
         

        nav(arg);
    }

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibml0aW4iLCJpYXQiOjE2NTAzNTE5MzN9.QfRC8cw5P9_vr9TD63dQfnMjRSQthkuY5I72sBR1Hmg");
        
        fetch("http://localhost:9000/assessment", {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          })
          .then(response => response.json())
          .then(result => {console.log(result)
                            setData(result)    
        })
          .catch(error => console.log('error', error));
      
    }, [])
    


    return (<>
        <MyTimer time={time}/>
        {data.length>0 &&
          <Container>
            {
                data.map((test, index) =>
                    <Card key={test.title}>
                        <div className='data'>
                            <img src={imageSrc(test.title)} />
                            <p>{test.title}</p>
                            <span>{test.durationInMins} minute</span>
                            <p className='start'
                                onClick={() => clickHandler(test.title)}>
                                Start
                            </p>
                        </div>
                    </Card>)
            }

        </Container>}
       
    </>
    )
}

export default DashBoard