import Prism from "prismjs";
import { useEffect } from "react";
import "./prism.css";

interface Idata {
  content: string;
}
type propsType = {
  data: Idata | any;
};

const CustomComponent = ({ data }: propsType) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);
  console.log(data);
  return (
    <pre className={`line-numbers`}>
      <code className={`language-${data.format}`}>{data.content}</code>
    </pre>
  );
};

export default CustomComponent;
//
