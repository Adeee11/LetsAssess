import { useContext, useEffect } from 'react'
import { LocalContext } from './Test';


const CompleteStatus = () => {

    const data = useContext<any>(LocalContext)
    useEffect(() => data.submitHandler(), [])

    return (<>
        <span>Time over</span>
    </>)
}

export default CompleteStatus; 