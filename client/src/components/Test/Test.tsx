import React, { useContext, useEffect, useState } from 'react'
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
import CustomComponent from '../CustomComponent/CustomComponent';
import { GlobalContext } from '../../App';

export const LocalContext = React.createContext({});


type propsType = {
    backToDashBoard: () => void,
    title: string
}



const Test = ({ title, backToDashBoard }: propsType) => {
    const [queNo, setQueNo] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<(string | boolean[])[] | any>([]);
    const [data1, setData1] = useState<any>();
    const ctx = useContext<any>(GlobalContext)
    const email = ctx.candidate.email;
    const name = ctx.candidate.name;

    useEffect(() => {

        fetch(`http://localhost:9000/assessment/${title}`).
            then(res => res.json()).
            then(result => {
                setData1(result)
                console.log(result)
            })

    }, [])

    useEffect(() => {
        window.onbeforeunload = function () {
            return "Data will be lost "
        }
    }, [])

    const submitHandler = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const obj: any = {
            "assessmentId": `${title}`,
            "candidateId": `${email}`,
            "data": {
                "candidateName": `${name}`
            }
        }
        obj.data[email] = {
            "optionsMarked": selectedOpt
        }
        var raw = JSON.stringify(obj);

        fetch("http://localhost:9000/result/add-candidate", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        backToDashBoard();
    }

    const nextQuestion = () => {
        if (queNo < data1.questions.length - 1)
            setQueNo((prevQueNo) => prevQueNo + 1);
        else submitHandler();
    }


    const selectOpt = (arg0: string | number) => {
        if (data1.questions[queNo].quesType == "mcq") {
            selectedOpt[queNo] = arg0;
            setSelectedOpt([...selectedOpt]);
        }
        else if (data1.questions[queNo].quesType == "mcq-m") {

            if (selectedOpt[queNo] == undefined) {
                selectedOpt[queNo] = [];
                selectedOpt[queNo] = data1.questions[queNo].options.map(() => false)
            }

            for (let i = 0; i < data1.questions[queNo].options.length; i++) {
                if (arg0 === data1.questions[queNo].options[i].optionValue) {
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
        else if (data1.questions[queNo].quesType === "mcq-m") {
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


    console.log(ctx.candidate)
    console.log(selectedOpt);
    return (
        <>
            <LocalContext.Provider value={datatopass}>
                {!data1 && <p>Loading.......</p>}
                {data1 && <Container>
                    <Column>
                        <div className='logo'>IWEBCODE</div>
                        <div className='subject'>{data1.title}</div>
                        <div className='description'> {`Question ${queNo + 1} of ${data1.questions.length}`} </div>
                        <Question>{data1.questions[queNo].quesValue}</Question>

                        {data1.questions[queNo].useCustomComponent === true &&
                            <QuestionCode>
                                <CustomComponent data={data1.questions[queNo].props} />
                            </QuestionCode>
                        }

                    </Column>

                    <Column>
                        <header>
                            {data1.questions[queNo].quesType === "mcq" && <p>Select one answer</p>}
                            {data1.questions[queNo].quesType === "mcq-m" && <p>Select multiple answer</p>}
                            <Timer>
                                <CountdownTimer />
                            </Timer>
                            <button
                                className="next"
                                onClick={() => nextQuestion()}
                                disabled={setDisable()}>
                                {queNo < data1.questions.length - 1 ? "Next Question" : "Finish"}
                            </button>
                        </header>
                        <Section>
                            {data1.questions[queNo].options.map((opt: any, index: any) =>
                                <div key={opt.optionId}>
                                    {/* if question type is mcq-m */}
                                    {data1.questions[queNo].quesType === "mcq-m" &&
                                        <Option
                                            className={selectedOpt[queNo] && selectedOpt[queNo][index] == true ? "act" : ""}
                                            onClick={() => selectOpt(opt.optionValue)}
                                        >
                                            <span>{opt.optionValue}</span>
                                            <span className='sn'>{index + 1}</span>
                                        </Option>
                                    }
                                    {data1.questions[queNo].quesType === "mcq" &&
                                        // if question type is mcq
                                        <Option
                                            className={selectedOpt[queNo] == opt.optionId ? "act" : ""}
                                            onClick={() => selectOpt(opt.optionId)}
                                        >
                                            {!opt.useCustomComponent && <span>{opt.optionValue}</span>}

                                            {opt.useCustomComponent &&
                                                <OptionCode>
                                                    <CustomComponent data={opt.optionProps} />
                                                </OptionCode>
                                            }

                                            <span className='sn'>{index + 1}</span>
                                        </Option>}
                                </div>
                            )}
                        </Section>

                    </Column>
                </Container>}
            </LocalContext.Provider>
        </>
    )
}

export default Test