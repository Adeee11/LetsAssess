import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { CardComponent } from "../../../components/CardComponent";
import { CustomComponent } from "../../../components/CustomComponent";
import { Input } from "../../../components/Input";
import Instructions from "../../../components/Instructions/Instructions";
// import { MessageBox } from "../../../components/MessageBox";
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
      color: #1411c8;
      margin-bottom: 20px;
      margin-top: 10px;
      text-decoration: underline;
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
    .col {
      .frame {
        border: solid 2px white;
      }
    }
  }

  .code-block {
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    margin-right: 10px;
    margin-top: 20px;
    white-space: pre;
    :hover {
      background: black;
      opacity: 0.5;
    }
    :hover::after {
      content: "Click to copy!";
      color: white;
      position: absolute;
      font-size: 18px;
      font-weight: 700;
      top: calc(50% - 18px);
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
              title="Typescript"
              durationInMins={20}
              isCompleted={true}
              clickHandler={() => console.log("Clicked")}
            />
          </div>

          <CopyCode>
            {`<CardComponent
              title="Typescript"
              durationInMins={20}
              isCompleted={true}
              clickHandler={() => console.log("Clicked")}
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
      </div>
      {/* Instructions  */}
      <div className="row">
        <h1>Instructions</h1>
        <div className="col">
          <div className="frame">
            <Instructions
              onClose={() => console.log("will fire the function provide")}
            />
          </div>

          <CopyCode>
            {`<Instructions \nonClose={()=>console.log('will fire the function provide')} \n/>`}
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
          <div className="frame">
            <MyTimer time={new Date(Date.now() + 60 * 60 * 1000)} />
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
