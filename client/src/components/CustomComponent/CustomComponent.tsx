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

  let codeClass: string;

  switch (data.format) {
    case "js": {
      codeClass = "language-javascript";
      break;
    }
    case "css": {
      codeClass = "language-css";
      break;
    }
    case "html": {
      codeClass = "language-html";
      break;
    }
    default: {
      codeClass = "language-react-jsx";
    }
  }

  return (
    <pre className="line-numbers">
      <code className={codeClass}>{data.content}</code>
    </pre>
  );
};

export default CustomComponent;
