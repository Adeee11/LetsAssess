import Prism from "prismjs";
import { useEffect } from "react";

interface Idata{
    content:string,

}
type propsType={
    data:Idata|any,

}


const CustomComponent = ({data}:propsType) => {
  
  useEffect(()=>{
    setTimeout(() => Prism.highlightAll(), 0)
  },[])

  return (
    <pre className="line-numbers">
        <code className="language-css" >
           {data.content}
        </code>
    </pre>
  )
}

export default CustomComponent;