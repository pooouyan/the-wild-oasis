import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
      background-color: #9797950;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 40px;
      font-weight: 800;
      background-color: #888888;
    `}
`;
export default Heading;
