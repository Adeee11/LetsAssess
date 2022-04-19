import React, { Dispatch, SetStateAction } from 'react'
import { Card, Container } from './Dashboard.styled'
import git from '../../assets/images/git.png'
import html from '../../assets/images/html.png'
import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import node from '../../assets/images/node.png'
import ts from '../../assets/images/ts.svg'
import cq from '../../assets/images/cq.png'
import { useNavigate } from 'react-router-dom';
import MyTimer from '../MyTimer/MyTimer'

const listOfTests = [
    {
        title: "html-and-css",
        imgSrc: "/images/html.png",
        durationInMins: 20
    },
    {
        title: "javaScript",
        imgSrc: "/images/js.png",
        durationInMins: 20
    },
    {
        title: "typeScript",
        imgSrc: "/images/ts.svg",
        durationInMins: 20
    },
    {
        title: "reactjs",
        imgSrc: "/images/react.png",
        durationInMins: 20
    },
    {
        title: "node",
        imgSrc: "/images/node.png",
        durationInMins: 20
    },
    {
        title: "code-quality",
        imgSrc: "/images/cq.png",
        durationInMins: 20
    },
]


const DashBoard = () => {

    const nav = useNavigate();

    const time = new Date();

    time.setSeconds(time.getSeconds() + 2400);

    const clickHandler = (arg: string) => {
        nav(arg);
    }


    return (<>
        <MyTimer expiryTimestamp={time} />
        <Container>
            {
                listOfTests.map((test) =>
                    <Card key={test.title}>
                        <div className='data'>
                            <img src={test.imgSrc} />
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
    </>
    )
}

export default DashBoard