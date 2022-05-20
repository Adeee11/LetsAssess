import Prism from "prismjs";
import { useEffect } from "react";
import "./prism.css";

interface Idata {
  content: string;
  format: string;
  type: string;
}
type propsType = {
  data: Idata | any;
};

const CustomComponent = ({ data }: propsType) => {
  
  useEffect(() => {
    Prism.highlightAll();
  });
console.log(data);
  return (
    <pre className={`line-numbers`}>
      <code className={`language-${data.format==="jsx"?"js":data.format}`}>{data.content}</code>
    </pre>
  );
};

export default CustomComponent;
//
