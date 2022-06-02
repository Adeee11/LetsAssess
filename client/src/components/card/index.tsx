import React from 'react'
import styled from 'styled-components';

type cardPropType = {
    clickHandler: () => void;
    email?: string;
    name?: string;
    isFlex?: boolean;
    assessmentId?: string;
    marks?: number;
    allMarks?: number
    date?:string
}

const imageSrc = (title: string) => {
    if (title === "javascript") return "/images/js.png";
    else if (title === "html-and-css") return "/images/html.png";
    else if (title === "typescript") return "/images/ts.svg";
    else if (title === "node-js") return "/images/node.png";
    else if (title === "react") return "/images/react.png";
    else if (title === "git") return "/images/git.png";
};

const Card = ({ 
    clickHandler,
    email,
    name,
    assessmentId,
    marks,
    isFlex,
    allMarks,
    date
}: cardPropType) => {
    const totalMarks = 20;


    return (<>
        {isFlex && <TheCard onClick={() => clickHandler()} isFlex={isFlex}>
            <img className="img" src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png" alt="" />
            <div className="right">
                <div className='right1'>
                    <span className='name'>{name}</span>
                    <span className='email'>{email}</span>
                    <span className='date'>{date}</span>
                </div>
                <div className='right2'>
                    <span>Score</span>
                    <span>{allMarks}</span>
                </div>
            </div>
        </TheCard>
        }
        {
            !isFlex &&
            <TheCard onClick={() => clickHandler()}>
                <img src={imageSrc(assessmentId || "")} alt="Subject" />
                <span>
                    <b>Marks:</b> {marks} / {totalMarks}
                </span>
                <span>{assessmentId}</span>
            </TheCard>
        }
    </>
    )
}

export default Card;


type propType = {
    isFlex?: boolean
}
const TheCard = styled.div<propType>`
    display :${({ isFlex }) => isFlex ? "flex" : ""};
    align-items: center;
    font-size: 14px;
    text-align: center;
    width: 100%;
    padding: ${(props) => props.isFlex ? "0px" : "10px"};
    width:100%;
    background-color:${({ theme }) => theme.pellete.primary};
    margin: 0 auto;
    width:100% ;   
    border-radius: 6px;
    box-shadow:  ${({ theme }) => theme.boxShadow.card};
    color: rgba(58, 53, 65, 0.87);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    span{
        padding: 10px;
    }
    img{
        width: 100px;
        height: 100px;
        padding: 20px;
        object-fit: contain;
        margin-left: 10px;
    }
    .img{
        border-radius: 50%;
        padding: 0px;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .right{
        
        text-align: left;
        flex: 1;
        display: flex;
        justify-content: space-between;
        .right1{
            width:50%;
            flex-basis: 50%;
            z-index: 5;
            /* border:1px solid black; */
            /* overflow: hidden; */
            .name{
               /* border:1px solid black; */
               padding: 0;
               padding-top: 10px;
            }
            .email{
                /* border:1px solid black; */
                padding: 0;
                padding: 5px 0;
            }
            .date{
                /* border:1px solid black; */
                padding: 0;
                padding-bottom: 10px;
            }
        }
        .right2{
            max-width: 122px;
            flex-basis: 25%;
            width: 25%;
            border-radius: 0 0 0 6px;
            background-image: ${({ theme }) => theme.pellete.main};
            color:${({ theme }) => theme.pellete.primary};
            position: absolute;
            
            right: 0;
            top:0;
            height: 58px;
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: center;
            flex-direction: column;

           
            span{
             padding: 0;
            }
        }
    }
    @media (max-width:768px){
     margin-left: auto;
     margin-right: auto;
}
    span{
        display: block;
    }
&:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
    
`

