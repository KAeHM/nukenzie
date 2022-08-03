import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  background-color: #121214;


  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar{
    background-color: transparent;
    width: 6px;
  }
  *::-webkit-scrollbar-thumb{
    background-color: #303030;
    border-radius: 5px;
  }
`;

export const DivMain = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #121214;

  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  padding: ${(props) => props.padding};
`;

export const FlexBox = styled.div`
  width: ${(props) => props.width || "0px"};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "0px"};
  background-color: ${(props) => props.background || "transparent"};
  border: ${(props) => props.border || "none"};
  border-left: none;
  border-right: none;

  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0px"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;
