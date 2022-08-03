import styled from "styled-components";

export const StyledButton = styled.button`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "223px"};
  color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${(props) => props.color || "white"};
`;

export const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  max-height: 510px;
  max-width: 720px;
  background-color: #212529;
  border-radius: 4px;
  padding: 22px 0px;

  overflow: auto;
`;
