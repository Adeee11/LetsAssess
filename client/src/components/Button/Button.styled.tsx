import styled from "styled-components";

const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.pellete.main};
  color: white;
  padding: 6px 20px;
  border-radius: 4px;
  border: none;
  /* margin: 0 auto; */
  display: block;
  font-size: 16px;
  margin-bottom: 30px;
`;

export { ButtonContainer };
