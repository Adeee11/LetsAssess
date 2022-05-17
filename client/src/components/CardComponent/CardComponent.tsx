import React from 'react'
import { CardContainer } from './CardComponent.styled'

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
            <div className="data">
                <img src={imageSrc(title)} alt=""/>
                <p>{title}</p>
                <span>{durationInMins} minute</span>
                {!isCompleted && <p className="start" onClick={clickHandler}>
                    Start
                </p>}
                {isCompleted && <p className="start complete">Completed</p>}
            </div>
        </CardContainer>
    )
}

export default Card
