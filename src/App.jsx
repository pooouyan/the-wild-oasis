import { styled } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
const StyledApp = styled.main`
  margin: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">pouyan has most </Heading>
            <div>
              <Button variations="primary" size="medium">
                hello
              </Button>
              <Heading as="h2">pouyan has not most </Heading>
            </div>
          </Row>
          <Row>
            <Button variations="secondary" size="small">
              Help
            </Button>
            <Input type="text" />
            <form>
              <Input type="number" placeholder="number of guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
