import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledInput = styled(TextField)`
  & .MuiInputLabel-root {
    color: #868e96;
    &.Mui-focused {
      color: #868e96;
    }
  }

  & .MuiInputBase-root {
    background-color: #323b41;

    & .MuiInputBase-input {
      color: white;
    }
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ff577f;
    }
  }
`;

export const StyledButton = styled.button`
  height: 40px;
  width: ${(props) => props.width || "223px"};
  color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${(props) => props.color || "white"};
`;
