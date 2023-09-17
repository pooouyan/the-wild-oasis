import { styled } from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: #979795;
`;
const Button = styled.button`
  font-size: 1.6rem;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: #ffffff;
  cursor: pointer;
`;
const Input = styled.input`
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;
function App() {
  return (
    <div>
      <H1>pouyan has most beautiful mind</H1>
      <Button>Help</Button>
      <Input type="number" placeholder="number of guest" />
    </div>
  );
}

export default App;
