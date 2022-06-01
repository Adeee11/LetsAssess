import React from 'react'
import { CardContainer } from './CardComponent.styled';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

type propTypes={
    title:string,
    durationInMins:number,
    isCompleted:boolean,
    clickHandler:()=>void
}

const Card = ({title, durationInMins, isCompleted, clickHandler}:propTypes) => {
    const imageSrc = (title: string) => {
        if (title === "JavaScript") return "/images/js.png";
        else if (title === "HTML and CSS") return "/images/html.png";
        else if (title === "Typescript") return "/images/ts.svg";
        else if (title === "Node js") return "/images/node.png";
        else if (title === "React") return "/images/react.png";
        else if (title === "Git") return "/images/git.png";
      };
    return (
        <CardContainer key={title}>
            
                <img src={imageSrc(title)} alt="CardImage" />
                <p>{title}</p>
                <span>20 Questions</span>
                <span className='est'>Est. {durationInMins} Minutes </span>
                {!isCompleted && <div className="start" onClick={clickHandler}>
                   <span> Enter </span>
                   <span className='arrow'><AiOutlineArrowRight/></span>
                </div>}
                <div className='completed'>
                {isCompleted && <div className="complete"><TiTick/></div>}
                {isCompleted && <div className="complete c-text">Completed</div>}
                </div>
        
        </CardContainer>
    )
}

export default Card
