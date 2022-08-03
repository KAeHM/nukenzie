import { DivMain, FlexBox } from "./../../style";
import { StyledButton, StyledForm, StyledInput, StyledPaper } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import { API } from "./../../Sources/Api";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function Login() {
  const [reveal, setReveal] = useState(false);

  const shcema = yup.object().shape({
    email: yup
      .string()
      .required("Campo necessario")
      .email("O email precisa estar no formato certo"),
    password: yup.string().required("Campo necessario"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shcema),
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data) => {
    const promisse = API.post("/sessions", data).then((response) => response);

    toast.promise(promisse, {
      loading: "Carregando...",
      success: (response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/dashboard/" + response.data.user.id);
        return "Bem-vindo(a) " + response.data.user.name;
      },
      error: (num) => "Usuario não encontrado. " + num,
    });
  };

  return (
    <DivMain alignItems="center" justifyContent="center">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#343b41",
            color: "white",
          },
        }}
      />
      <FlexBox
        width="300px"
        height="85%"
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap="20px"
      >
        <h1 style={{ color: "#FF577F", fontSize: "1.5rem" }}>Kenzie Hub</h1>
        <StyledPaper>
          <h2 style={{ color: "#F8F9FA", fontSize: "1.1rem" }}>Login</h2>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              error={errors.email && true}
              helperText={errors.email?.message && errors.email?.message}
              label="Email"
              placeholder="Digite seu Email"
              size="small"
              {...register("email")}
            ></StyledInput>
            <StyledInput
              error={errors.password && true}
              helperText={errors.password?.message && errors.password?.message}
              label="Senha"
              placeholder="Digite sua Senha"
              size="small"
              type={reveal ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setReveal(!reveal)}>
                      {reveal ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password")}
            ></StyledInput>
            <StyledButton type="submit" color="#ff577f">
              Login
            </StyledButton>
          </StyledForm>
          <span style={{ fontSize: "12px", color: "#868e96" }}>
            Ainda não possui uma conta?
          </span>
          <StyledButton
            onClick={() => {
              history.push("/register");
            }}
            color="#868e96"
          >
            Cadastre-se
          </StyledButton>
        </StyledPaper>
      </FlexBox>
    </DivMain>
  );
}

export default Login;
