import React, { useEffect, useState } from 'react'
import {
    Column,
    Container,
    Section,
    Option,
    Question,
    Timer, 
    QuestionCode,
    OptionCode
} from './Test.styled';
import CountdownTimer from './CountdownTimer'
import { data } from './jstest';
import CustomComponent from '../CustomComponent/CustomComponent';

export const LocalContext = React.createContext({});


type propsType = {
    topic: string | null,
    backToDashBoard:()=>void
}



const Test = ({ topic , backToDashBoard}: propsType) => {
    const [queNo, setQueNo] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<(string | boolean[])[] | any>([]);

    useEffect(() => {
        window.addEventListener("beforeunload", (e)=>{
            e.preventDefault();
            const message ="if you refresh you marked as failed";
            e.returnValue = message;
            return message;           
        });
       
      }, []);


    const submitHandler = () => {
        alert(selectedOpt);
        console.log("selected option", selectedOpt);
        backToDashBoard();
    }

    const nextQuestion = () => {
        if (queNo < data.Questions.length - 1)
            setQueNo((prevQueNo) => prevQueNo + 1);
        else submitHandler();
    }


    const selectOpt = (arg0: string|number) => {
        if (data.Questions[queNo].quesType == "mcq") {
            selectedOpt[queNo] = arg0;
            setSelectedOpt([...selectedOpt]);
        }
        else if (data.Questions[queNo].quesType == "mcq-m") {

            if (selectedOpt[queNo] == undefined) {
                selectedOpt[queNo] = [];
                selectedOpt[queNo] = data.Questions[queNo].options.map(() => false)
            }

            for (let i = 0; i < data.Questions[queNo].options.length; i++) {
                if (arg0 === data.Questions[queNo].options[i].optionValue) {
                    selectedOpt[queNo][i] = !selectedOpt[queNo][i];
                }
            }
            setSelectedOpt([...selectedOpt]);
        }

    }

    //  sets enable or disable next button
    const setDisable = () => {
        if (selectedOpt[queNo] == undefined) {
            return true
        }
        else if (data.Questions[queNo].quesType === "mcq-m") {
            let flag = true;
            for (let i = 0; i < selectedOpt[queNo].length; i++) {
                if (selectedOpt[queNo][i] == true) flag = false;
            }
            return flag;
        }
        else {
            return false
        }
    }

    const datatopass = {
        selectedOpt: selectedOpt,
        submitHandler: submitHandler
    }



    console.log(selectedOpt);
    return (
        <>
            <LocalContext.Provider value={datatopass}>
                <Container>
                    <Column>
                        <div className='logo'>IWEBCODE</div>
                        <div className='subject'>{data.title}</div>
                        <div className='description'> {`Question ${queNo + 1} of ${data.Questions.length}`} </div>
                        <Question>{data.Questions[queNo].quesValue}</Question>

                        {data.Questions[queNo].useCustomComponent === true &&
                            <QuestionCode>
                                <CustomComponent data={data.Questions[queNo].props} />
                            </QuestionCode>
                        }

                    </Column>

                    <Column>
                        <header>
                            {data.Questions[queNo].quesType === "mcq" && <p>Select one answer</p>}
                            {data.Questions[queNo].quesType === "mcq-m" && <p>Select multiple answer</p>}
                            <Timer>
                                <CountdownTimer />
                            </Timer>
                            <button
                                className="next"
                                onClick={() => nextQuestion()}
                                disabled={setDisable()}>
                                {queNo < data.Questions.length - 1 ? "Next Question" : "Finish"}
                            </button>
                        </header>
                        <Section>
                            {data.Questions[queNo].options.map((opt, index) =>
                                <div key={opt.optionId}>
                                    {/* if question type is mcq-m */}
                                    {data.Questions[queNo].quesType === "mcq-m" &&
                                        <Option
                                            className={selectedOpt[queNo] && selectedOpt[queNo][index] == true ? "act" : ""}
                                            onClick={() => selectOpt(opt.optionValue)}
                                        >
                                            <span>{opt.optionValue}</span>
                                            <span className='sn'>{index + 1}</span>
                                        </Option>
                                    }
                                    {data.Questions[queNo].quesType === "mcq" &&
                                        // if question type is mcq
                                        <Option
                                            className={selectedOpt[queNo] == opt.optionId ? "act" : ""}
                                            onClick={() => selectOpt(opt.optionId)}
                                        >
                                          {!opt.useCustomComponent && <span>{opt.optionValue}</span>}
                                            
                                            {opt.useCustomComponent &&
                                            <OptionCode>
                                                <CustomComponent data={opt.optionProps}/>
                                            </OptionCode>
                                            }    
                                            
                                            <span className='sn'>{index + 1}</span>
                                        </Option>}
                                </div>
                            )}
                        </Section>

                    </Column>
                </Container>
            </LocalContext.Provider>
        </>
    )
}

export default Test