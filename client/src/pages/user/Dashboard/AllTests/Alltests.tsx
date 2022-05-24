import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../../components/Footer/Footer';
import Header from '../../../../components/Header/Header';
import { GlobalContext } from '../../../../GlobalContext/GlobalContextProvider';
import { Card, Container } from '../Dashboard.styled'


const imageSrc = (title: string) => {
    if (title === "javascript") return "/images/js.png";
    else if (title === "html-and-css") return "/images/html.png";
    else if (title === "typescript") return "/images/ts.svg";
    else if (title === "node-js") return "/images/node.png";
    else if (title === "react") return "/images/react.png";
    else if (title === "git") return "/images/git.png";
};

const Alltests = () => {
    const [candidateData, setCandidateData] = useState<
        { marksObtained: number; assessmentId: string }[] | null
    >(null);
    const ctx = useContext(GlobalContext);
    const { url } = ctx;
    const user = "Admin";
    const nav = useNavigate();

    const { email } = useParams();

    useEffect(() => {
        fetch(`${url}/candidate/${email}/assessments`, {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setCandidateData(result.data);
                if (result.msg) {
                    alert(result.msg)
                    nav(-1);
                }
            })
            .catch((error) => console.log("error", error));

    }, [email, url, nav])

    const clickHandler = (i: string, marks:number) => {
        nav(i);
        localStorage.setItem('marks', marks.toString())
    }
    return (<>
        <Header user={user} info="All Tests" />
        <Container>
            <div className="container pb-4" >
                <div className="row justify-content-start text-center " >
                    {
                        candidateData &&
                        candidateData.map((test) => (
                            <div className=" col-sm-12  col-md-6 col-lg-4 pt-4" key={test.assessmentId}>

                                <Card onClick={() => clickHandler(test.assessmentId, test.marksObtained)}>
                                    <img src={imageSrc(test.assessmentId )} alt="Subject" />
                                    <span>
                                        <b>Marks:</b>{" "}
                                        {test.marksObtained}
                                    </span>
                                    <span>{test.assessmentId}</span>
                                </Card>
                            </div>
                        ))}

                </div>
            </div>
        </Container>
        <Footer />
    </>
    )
}

export default Alltests
