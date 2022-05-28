import React from 'react'
import styled from 'styled-components';

type cardPropType = {
    clickHandler: () => void;
    email?: string;
    name?: string;
    isFlex?: boolean;
    assessmentId?: string;
    marks?: number;

}

const imageSrc = (title: string) => {
    if (title === "javascript") return "/images/js.png";
    else if (title === "html-and-css") return "/images/html.png";
    else if (title === "typescript") return "/images/ts.svg";
    else if (title === "node-js") return "/images/node.png";
    else if (title === "react") return "/images/react.png";
    else if (title === "git") return "/images/git.png";
};

const Card = ({ clickHandler, email, name, assessmentId, marks, isFlex }: cardPropType) => {
    const totalMarks = 20;

    return (<>
        {isFlex && <TheCard onClick={() => clickHandler()} isFlex={isFlex}>
            <img className="img" src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png" alt="" />
            <div className="right">
                <span>{name}</span>
                <span>{email}</span>
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
    padding: 10px;
    width:100%;
    background-color:${({ theme }) => theme.pellete.primary};
    margin: 0 auto;
    width:100% ;   
    border-radius: 6px;
    box-shadow:  ${({ theme }) => theme.boxShadow.card};
    color: rgba(58, 53, 65, 0.87);

    cursor: pointer;
    span{
        padding: 10px;
    }
    img{
        width: 100px;
        height: 100px;
        padding: 20px;
        object-fit: contain;
        
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
    }
    @media (max-width:768px){
     margin-left: auto;
     margin-right: auto;
}
    span{
        display: block;
    }

    
`

