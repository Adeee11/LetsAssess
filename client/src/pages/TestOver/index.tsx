import styled from "styled-components";

const StyledContainer = styled.div`
  background-size: cover;
  background-blend-mode: darken;
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      max-width: 200px;
      object-fit: contain;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    min-height: 100vh;
    img {
      max-width: 100vw;
      object-fit: contain;
    }
    h1 {
      color: #7955ca;
      font-size: clamp(20px, 40px);
      max-width: 500px;
      margin: 0px auto;
      margin-top: 60px;
      text-align: center;
      white-space: pre;
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    right: 0;
    max-height: 200px;
  }
`;

const TestOver = () => {
  //   const nav = useNavigate();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       nav("/");
  //     }, 4000);
  //   },[nav]);
  return (
    <StyledContainer>
      <main className="container main">
        <h1>{"OOPs!!!\n Looks like the time ran out"}</h1>
        <img src="images/examOver.png" alt="Exam Over" />
      </main>
      {/* <Footer /> */}
    </StyledContainer>
  );
};

export default TestOver;
