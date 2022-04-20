import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import { Card, Container } from './Dashboard.styled'
import { useNavigate } from 'react-router-dom';
import MyTimer from '../MyTimer/MyTimer'
import { GlobalContext } from '../../App';





const DashBoard = () => {
    
    
    const [data, setData] = useState<{durationInMins:number, title:string}[]|any>({
        data:[]
    })
   
    const nav = useNavigate();
    const ctx = useContext<any>(GlobalContext);
    const time = ctx.time;
    const token = ctx.token;
 
      console.log(time);
    const imageSrc=(title:string)=>{
          if(title=="JavaScript")
             return "/images/js.png"
          else if(title=="HTML and CSS")
              return "/images/html.png"   
    }
    
    
    const clickHandler = (arg: string) => {
       
        nav(arg);
    }

    useEffect(() => {
        console.log("token",token);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        
        fetch("http://localhost:9000/assessment", {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          })
          .then(response => response.json())
          .then(result => {console.log(result)
                            setData({...result})    
        })
          .catch(error => console.log('error', error));
      
    }, [])
    
 console.log(data);

    return (<>
        <MyTimer time={time}/>
        {data.data.length>0 &&
          <Container>
            {
                data.data.map((test:any, index:number) =>
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

        </Container>
        }
       
    </>
    )
}

export default DashBoard