import { useState } from 'react';
import { Test } from '../../components/Test'
import { Dashboard } from '../../components/Dashboard';
import { Wrapper } from './Candidate.Styled';


const Candidate = () => {
    const [selectedTest, setSelectedTest] = useState<string | null>(null);
    return (
        <>
            {!selectedTest &&
           
                   
                    <Dashboard setSelectedTest={setSelectedTest} />
             
            }

            {selectedTest &&

                <Test topic={selectedTest} backToDashBoard={()=>setSelectedTest(null)} />
            }
        </>

    )
}

export default Candidate