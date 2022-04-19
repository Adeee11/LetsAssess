import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Test } from '../../components/Test'
import { Card, Container } from './Dashboard.styled'
import git from '../../assets/images/git.png'
import html from '../../assets/images/html.png'
import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import node from '../../assets/images/node.png'
import ts from '../../assets/images/ts.svg'
import cq from '../../assets/images/cq.png'
import { data } from '../Test/jstest'
type propsType={
    setSelectedTest:Dispatch<SetStateAction<string | null>>
}
 
const DashBoard = ({setSelectedTest}:propsType) => {
const [allData, setAllData] = useState([])
 

   
    return (
    <Container>
                <Card onClick={() => setSelectedTest("html-and-css")}>
                    <div className='data'>
                    <img src={html} />
                    <p>HTML and CSS</p>
                    <span>20 minute</span>
                    </div>
                </Card>
                <Card onClick={() => setSelectedTest("javascript")}>
                <div className='data'>
                    <img src={js} />
                    <p>JS</p>
                    <span>20 minute</span>
                    </div>
                </Card>
                <Card onClick={() => setSelectedTest("ts")}> 
                <div className='data'>
                    <img src={ts} />
                    <p>TypeScript</p>
                    <span>20 minute</span>
                    </div>
                </Card>
                <Card onClick={() => setSelectedTest("react")}>
                <div className='data'>
                    <img src={react} />
                    <p>React JS</p>
                    <span>20 minute</span>
                    </div>
                </Card>
               
                <Card onClick={() => setSelectedTest("node")}>
                <div className='data'>
                    <img src={node} />
                    <p>Node JS</p>
                    <span>20 minute</span>
                    </div>
                </Card>
                <Card onClick={() => setSelectedTest("git")}>
                <div className='data'>
                    <img src={git} />
                    <p>Git</p>
                    <span>20 minute</span>
                    </div>
                </Card>
                <Card onClick={() => setSelectedTest("cq")}>
                <div className='data'>
                    <img src={cq} />
                    <p>Code Quality</p>
                    <span>20 minute</span>
                    </div>
                </Card>
            </Container>
  )
}

export default DashBoard