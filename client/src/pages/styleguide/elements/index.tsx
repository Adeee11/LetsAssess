import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";

const TheElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .row {
    justify-content: center;
    text-align: left;
  }

  .code-block{
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px;
  }
  .frame{
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
  }
`;
interface CodeProps {
  children: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CopyCode = ({ children, onClick }: CodeProps) => {
  return (
    <div className="row code-block" onClick={onClick}>
      {children}
    </div>
  );
};

const Elements = () => {
  return (
    <TheElements className="container">
      <div className="row">
        <h1>Button</h1>
        <div className="col-3">
          <h2>Button</h2>
          <div className="frame">
          <Button type="button" value="Button" />
          </div>
         
          <CopyCode>Code</CopyCode>
        </div>
        <div className="col-3">
          <h2>Submit</h2>
          <div className="frame">
          <Button type="submit" value="Button" />
          </div>
         
          <CopyCode>Code</CopyCode>
        </div>
        <div className="col-3">
          <h2>Reset</h2>
          <Button type="reset" value="Button" />
          <CopyCode>Code</CopyCode>
        </div>
      </div>
    </TheElements>
  );
};

export default Elements;
