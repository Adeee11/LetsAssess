import styled from "styled-components";

const TopNavBar = styled.header`
  z-index: 999;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.pellete.primary};
  box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
  margin-bottom: 10px;
  box-sizing: border-box;

  .borderbottom {
    border-bottom: 1px solid rgba(58, 53, 65, 0.12);
  }
  .boxshadow {
  }
  .info {
    text-transform: uppercase;
    color: ${(props) => props.theme.pellete.secondary};
  }
`;
const UpperNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  img {
    max-width: 120px;
  }
  .right {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.pellete.secondary};
  }
  .avatar {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    background-image: ${(props) => props.theme.pellete.main};
    color: ${(props) => props.theme.pellete.primary};
    cursor: pointer;
  }

  @keyframes animation1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .logout {
    position: absolute;
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    top: 64px;
    padding: 10px 20px;
    border-radius: 6px;
    margin-left: -30px;
    margin-top: -7px;
    padding-bottom: 0px;
    animation-name: animation1;
    animation-duration: 0.7s;
    background-color: ${({ theme }) => theme.pellete.primary};

    ul {
      text-align: left;
      list-style: none;
      padding: 0;
      color: gray;
      li {
        font-size: 16px;
        cursor: pointer;
        padding: 5px;
        transition: 0.3s;
      }
      li:hover {
        color: ${({ theme }) => theme.pellete.purple};
      }
    }
  }
`;
const LowerNavBar = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .marks{
      margin-left: 10px;
    }
  } */
  .time {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.pellete.secondary};
  }
  .dashboard {
    display: flex;
    align-items: center;
    box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
    background-image: ${(props) => props.theme.pellete.main};
    padding: 9px 0;
    border-radius: 21px;
    color: ${(props) => props.theme.pellete.primary};
    border: none;
    font-size: 16px;
    min-width: 194px;
    justify-content: center;
    svg {
      width: 20px;
      path {
        fill: white;
      }
    }
  }
`;

export { TopNavBar, UpperNavBar, LowerNavBar };
