import { DivMain, FlexBox } from "./../../style";
import { StyledButton, StyledForm, StyledInput, StyledPaper } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { IconButton, InputAdornment, MenuItem } from "@mui/material";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import { API } from "./../../Sources/Api";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function Register() {
  const [reveal, setReveal] = useState(false);

  const shcema = yup.object().shape({
    name: yup.string().required("Campo necessario"),
    email: yup
      .string()
      .required("Campo necessario")
      .email("O email precisa estar no formato certo"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,}$/,
        "Sua senha deve conter ao menos 6 caracteres, um numero, uma letra minúscula, uma letra maiúscula e um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Campo necessario"),
    contact: yup.string().required("Campo necessario"),
    course_module: yup.string(),
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
    let { name, email, password, bio, contact, course_module } = data;
    const obj = {
      name,
      email,
      password,
      bio,
      contact,
      course_module,
    };

    const promisse = API.post("/users", obj).then((response) =>
      history.push("/")
    );

    toast.promise(promisse, {
      loading: "Carregando...",
      success: "Registrado com sucesso, realize o login.",
      error: "Algo deu errado.",
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
        height="90%"
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap="20px"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h1 style={{ color: "#FF577F", fontSize: "1.5rem" }}>Kenzie Hub</h1>
          <StyledButton
            onClick={() => {
              history.push("/");
            }}
            width="70px"
            color="#212529"
          >
            Voltar
          </StyledButton>
        </div>
        <StyledPaper>
          <h2 style={{ color: "#F8F9FA", fontSize: "1.1rem" }}>
            Crie sua conta
          </h2>
          <span style={{ fontSize: "12px", color: "#868e96" }}>
            Rapido e grátis, vamos nessa
          </span>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              error={errors.name && true}
              helperText={errors.name?.message && errors.name?.message}
              label="Nome"
              placeholder="Digite seu Nome"
              size="small"
              {...register("name")}
            ></StyledInput>
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
              id="password"
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
            <StyledInput
              error={errors.confirmPassword && true}
              helperText={
                errors.confirmPassword?.message &&
                errors.confirmPassword?.message
              }
              label="Confirme sua senha"
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
              {...register("confirmPassword")}
            ></StyledInput>
            <StyledInput
              error={errors.bio && true}
              helperText={errors.bio?.message && errors.bio?.message}
              label="Bio"
              placeholder="Digite sua Bio"
              size="small"
              {...register("bio")}
            ></StyledInput>
            <StyledInput
              error={errors.contact && true}
              helperText={errors.contact?.message && errors.contact?.message}
              label="Contato"
              placeholder="Digite seu Contato"
              size="small"
              {...register("contact")}
            ></StyledInput>
            <StyledInput
              select
              defaultValue={"Primeiro módulo (Introdução ao Frontend)"}
              style={{ width: "100%" }}
              label="Modulo Atual"
              size="small"
              {...register("course_module")}
            >
              <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
                Primeiro módulo
              </MenuItem>
              <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
                Segundo módulo
              </MenuItem>
              <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
                Terceiro módulo
              </MenuItem>
              <MenuItem value={"Quarto módulo (Backend Avançado)"}>
                Quarto módulo
              </MenuItem>
            </StyledInput>
            <StyledButton type="submit" color="#59323F">
              Cadastrar
            </StyledButton>
          </StyledForm>
        </StyledPaper>
      </FlexBox>
    </DivMain>
  );
}

export default Register;
