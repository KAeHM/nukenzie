import styled from "styled-components";

export const StyledLi = styled.li`
  width: 90%;
  height: 48px;
  padding: 0 12px;
  margin: 20px auto;

  background-color: #121214;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      background-color: #343b41;
    }
  }
`;
