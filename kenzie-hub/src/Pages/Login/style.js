import { Paper, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  width: 100%;
  height: 400px;

  background-image: linear-gradient(to right, #212529, #212529);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 223px;
`;

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
  width: 223px;
  color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${(props) => props.color || "white"};
`;
