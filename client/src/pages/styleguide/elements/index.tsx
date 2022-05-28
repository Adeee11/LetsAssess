import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import Card from "../../../components/card";
import { CardComponent } from "../../../components/CardComponent";
import { CustomComponent } from "../../../components/CustomComponent";
import { Input } from "../../../components/Input";
import { MyTimer } from "../../../components/MyTimer";
import { Spinner } from "../../../components/Spinner";

interface CodeProps {
  children: any;
}

interface RegisterTypes {
  email?: string;
  name?: string;
  password?: string;
}

const TheElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  .row {
    justify-content: center;
    text-align: left;
    h1 {
      color:black;
      margin-bottom: 20px;
      margin-top: 10px;
      /* text-decoration: underline; */
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
      color: ${({ theme }) => theme.pellete.secondary};
    }
    .h2{
      color:black;
    }
    h3{
      font-size: 18px;
     
    }
    h4{
      font-size: 16px;
   
    }
    h5{
      font-size: 14px;
   
    }
    h6{
      font-size: 12px;
      
    }
    p{
      font-size: 16px;
      
    }
    .col {
      .frame {
        /* border: solid 2px white; */
      }
    }
  }

  .code-block {
    background: white;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 10px;
    padding: 10px 20px;
    /* margin-right: 10px; */
    margin-top: 20px;
    white-space: pre;
    overflow: hidden;
    cursor: pointer;
    
    :hover::after {
      content: "Click to copy!";
      color: white;
      position: absolute;
      font-size: 16px;
      width: 100%;
      height: 100%;
      top:0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #615d5dbe;
    }
    position: relative;
    .copied-text {
      position: absolute;
      width: inherit;
      height: inherit;
      top: calc(50% - 10px);
      left: calc(50% - 10px);
    }
  }
`;
const CopyCode = ({ children }: CodeProps) => {
  const clickHandler = () => {
    navigator.clipboard.writeText(children);
  };
  return (
    <div className="code-block" onClick={clickHandler}>
      {children}
    </div>
  );
};
//id, label, type, register, registerValue
const Elements = () => {
  const { register } = useForm<RegisterTypes>();
  return (
    <TheElements className="container">
      {/* Button  */}
      <div className="row">
        <h1>Button</h1>
        <div className="col">
          <h2>Button</h2>
          <div className="frame">
            <Button type="button" value="Button" />
          </div>

          <CopyCode>{`<Button type="button"\n value="Button" />`}</CopyCode>
        </div>
        <div className="col">
          <h2>Submit</h2>
          <div className="frame">
            <Button type="submit" value="Button" />
          </div>

          <CopyCode>{`<Button type="submit"\n value="Button" />`}</CopyCode>
        </div>
        <div className="col">
          <h2>Reset</h2>
          <div className="frame">
            <Button type="reset" value="Button" />
          </div>

          <CopyCode>{`<Button type="reset"\n value="Button" />`}</CopyCode>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <h2>Success</h2>
          <div className="frame">
            <Button
              type="submit"
              value="Success"
              color="success"
            />
          </div>
          <CopyCode>{`<Button
              type="submit"
              value="Success"
              color="success"
            />`}</CopyCode>
        </div>
        <div className="col">
          <h2>Dark</h2>
          <div className="frame">
            <Button
              type="submit"
              value="Dark"
              color="dark"
            />
          </div>
          <CopyCode>{`<Button
              type="submit"
              value="dark"
              color="dark"
            />`}</CopyCode>
        </div>
        <div className="col">
          <h2>Purple</h2>
          <div className="frame">
            <Button
              type="submit"
              value="purple"
              color="purple"
            />
          </div>
          <CopyCode>{`<Button
              type="submit"
              value="Purple"
              color="purple"
            />`}</CopyCode>
        </div>
      </div>

      {/* typography */}
      <div className=" row">
      <h1>Text</h1>
      <div className="col">
        <h2>Header1</h2>
        <div className="frame">
           <h1>Header1</h1>
         
        </div>
        <CopyCode>
             {`<h1>Header1</h1>`}
           </CopyCode> 
      </div>
      <div className="col">
        <h2>Header2</h2>
        <div className="frame">
          <h2 className="h2">Header2</h2>
            
            
        </div>
        <CopyCode>
             {`<h2>Header2</h2>`}
             </CopyCode>
      </div>

      <div className="col">
        <h2>Header3</h2>
        <div className="frame">
          <h3>Header3</h3>
         </div>

         <CopyCode>
             {`<h3>Header3</h3>`}
             </CopyCode>
      </div>
    </div>
    <div className="row mt-3">
    <div className="col">
        <h2>Header4</h2>
        <div className="frame">
          <h4>Header4</h4>
         </div>

         <CopyCode>
             {`<h4>Header4</h4>`}
             </CopyCode>
      </div>
      <div className="col">
        <h2>Header5</h2>
        <div className="frame">
          <h5>Header5</h5>
         </div>

         <CopyCode>
             {`<h5>Header5</h5>`}
             </CopyCode>
      </div>
      <div className="col">
        <h2>Header6</h2>
        <div className="frame">
          <h6>Header6</h6>
         </div>

         <CopyCode>
             {`<h6>Header6</h6>`}
             </CopyCode>
      </div>
    </div>
    {/* paragraph */}
    <div className="row mt-3">
      <div className="col">
        <h2>Paragraph</h2>
        <div className="frame">
          <p>Paragraph</p>
        </div>

        <CopyCode>
          {`<p>Paragraph</p>`}
        </CopyCode>
      </div>
      <div className="col">
        <h2>Anchor</h2>
        <div className="frame">
          <a href="/styleguide">Anchor</a>
        </div>

        <CopyCode>
          {`<a>Anchor</a>`}
        </CopyCode>
      </div>
      <div className="col">
        <h2>Code</h2>
        <div className="frame">
          <pre>
          <code className="language-html">{'<div classname="container">\n \t <h1>Hello World</h1>\n \t <p>Your text here</p>\n</div>'}</code>
          </pre>
        </div>

        <CopyCode>
          {`<code>
            "<div classname="container">
                  <h1>Hello World</h1>
                  <p>Your text here</p>
                </div>"
</code>`}
        </CopyCode>
      </div>
    </div>
      {/* Input  */}
      <div className="row">
        <h1>Input</h1>
        <div className="col">
          <h2>Email</h2>
          <div className="frame">
            <Input
              type="email"
              registerValue="email"
              id={"email"}
              label={"Email"}
              register={register}
            />
          </div>

          <CopyCode>
            {`<Input
              type="email"
              registerValue="email"
              id={"email"}
              label={"Email"}
              register={register}
            />`}
          </CopyCode>
        </div>
        <div className="col">
          <h2>Name</h2>
          <div className="frame">
            <Input
              type="text"
              registerValue="name"
              id={"name"}
              label={"Name"}
              register={register}
            />
          </div>

          <CopyCode>{` <Input
            type="text"
            registerValue="name"
            id={"name"}
            label={"Name"}
            register={register}
          />`}</CopyCode>
        </div>
        <div className="col">
          <h2>Password</h2>
          <div className="frame">
            <Input
              type="password"
              registerValue="password"
              id={"password"}
              label={"Password"}
              register={register}
            />
          </div>

          <CopyCode>{`<Input
            type="password"
            registerValue="password"
            id={"password"}
            label={"Password"}
            register={register}
          />`}</CopyCode>
        </div>
      </div>
      {/* Card */}
      <div className="row">
        <h1>Card</h1>
        <div className="col">
          <h2>Uncomplete Test</h2>
          <div className="frame">
            <CardComponent
              title="Typescript"
              durationInMins={20}
              isCompleted={false}
              clickHandler={() => console.log("Clicked")}
            />
          </div>

          <CopyCode>
            {`<CardComponent
              title="Typescript"
              durationInMins={20}
              isCompleted={false}
              clickHandler={() => console.log("Clicked")}
            />`}
          </CopyCode>
        </div>

        <div className="col">
          <h2>Completed Test</h2>
          <div className="frame">
            <CardComponent
              title="Git"
              durationInMins={20}
              isCompleted={true}
              clickHandler={() => console.log("Clicked")}
            />
          </div>

          <CopyCode>
            {`<CardComponent
              title="Git"
              durationInMins={20}
              isCompleted={true}
              clickHandler={() => console.log("Clicked")}
            />`}
          </CopyCode>
        </div>
      </div>

      <div className="row mt-3">

        <div className="col">
          <h2>User Card</h2>
          <div className="frame">
            <Card
              clickHandler={() => console.log("clicked")}
              email="candidate1@gmail.com"
              name="Candidate1"
              isFlex
            />
          </div>

          <CopyCode>
            {`<Card
              clickHandler={() => console.log("clicked")}
              email="candidate1@gmail.com"
              name="Candidate1"
              isFlex
            />`}
          </CopyCode>
        </div>
        <div className="col">
          <h2>Marks Card</h2>
          <div className="frame">
            <Card
              clickHandler={() => console.log("clicked")}
              marks={19}
              assessmentId="git"
            />
          </div>
          <CopyCode>
            {`<Card
              clickHandler={() => console.log("clicked")}
              marks={19}
              assessmentId="git"
            />`}
          </CopyCode>
        </div>
      </div>


      <div className="row mt-3">

        <div className="col">
          <h2>Marks Card</h2>
          <div className="frame">
            <Card
              clickHandler={() => console.log("clicked")}
              marks={19}
              assessmentId="html-and-css"
            />
          </div>
          <CopyCode>
            {`<Card
              clickHandler={() => console.log("clicked")}
              marks={19}
              assessmentId="html-and-css"
            />`}
          </CopyCode>
        </div>
        <div className="col">
          <h2>Marks Card</h2>
          <div className="frame">
            <Card
              clickHandler={() => console.log("clicked")}
              marks={19}
              assessmentId="javascript"
            />
          </div>
          <CopyCode>
            {`<Card
              clickHandler={() => console.log("clicked")}
              marks={19}
              assessmentId="javascript"
            />`}
          </CopyCode>
        </div>
      </div>
      {/* Custom Component  */}
      <div className="row">
        <h1>Custom Component</h1>
        <div className="col">
          <div className="frame">
            <CustomComponent
              data={{
                content: "console.log('Some Code')",
                type: "code",
                format: "js",
              }}
            />
          </div>

          <CopyCode>
            {`<CustomComponent
            data={{
              content: "console.log('Some Code')",
              type: "code",
              format: "js",
            }}
          />`}
          </CopyCode>
        </div>

        <div className="col">
          <div className="frame">
            <CustomComponent
              data={{
                content: `.element{\n \t margin:0;\n \t padding:0;\n \t box-sizing:border-box;\n \t}`,
                type: "code",
                format: "css",
              }}
            />
          </div>

          <CopyCode>
            {`<CustomComponent
            data={{
              content: ".element{
                            margin:0;
                            padding:0;
                            box-sizing:border-box;
                        }",
              type: "code",
              format: "css",
            }}
          />`}
          </CopyCode>
        </div>
      </div>
        
      
      {/* MessageBox  */}
      <div className="row">
        <h1>Message Box</h1>

        <div className="col">
          <div className="frame">
            {/* <MessageBox
            msg="Some message"
            clickHandler={() => console.log("function provided runs")}
          /> */}
            This is a modal. So can't show it on page
          </div>

          <CopyCode>
            {`<MessageBox
            msg="Some message"
            clickHandler={() => console.log("function provided runs")}
          />`}
          </CopyCode>
        </div>
      </div>
      {/* MyTimer */}
      <div className="row">
        <h1>{"MyTimer"}</h1>
        <div className="col">
          <div className="frame row justify-content-start">
            <div className="col-sm-6 col-md-4 col-lg-2" >
            <MyTimer time={new Date(Date.now() + 60 * 60 * 1000)} />
            </div>
          </div>
          <CopyCode>
            {`<MyTimer time={new Date(Date.now() + 60 * 60 * 1000)} />`}
          </CopyCode>
        </div>
      </div>
      {/* Spinner  */}
      <div className="row">
        <h1>Spinner</h1>
        <div className="col">
          <Spinner />
          <CopyCode>{`<Spinner />`}</CopyCode>
        </div>
      </div>
    </TheElements>
  );
};

export default Elements;
