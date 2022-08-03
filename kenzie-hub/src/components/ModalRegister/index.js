import { StyledInput, StyledButton } from "./style";
import { useForm } from "react-hook-form";
import { MenuItem } from "@mui/material";
import { API } from "./../../Sources/Api";

function ModalRegister({ toast, techs, atualizarLista }) {
  const { register, handleSubmit } = useForm();

  function should(data) {
    return techs.every(
      (elem) => elem.title.toLowerCase() !== data.title.toLowerCase()
    );
  }

  const onSubmit = (data) => {
    if (should(data)) {
      const promisse = API.post("/users/techs", data, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }).then((response) => response);

      toast.promise(promisse, {
        loading: "Carregando...",
        success: (response) => {
          atualizarLista();
          return "Tecnologia adicionada: " + response.data.title;
        },
        error: (error) => "Algo deu errado: " + error,
      });
    } else {
      toast.error("Essa tecnologia já foi adicionada");
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "45px",
          background: "#343B41",
          display: "flex",
          alignItems: "center",
          padding: "0px 10px",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <p style={{ color: "#f8f9fa", fontSize: "0.9rem", fontWeight: "700" }}>
          Adicionar Tecnologia
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "25px 0px",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            width: "90%",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <StyledInput
            label="Nome"
            placeholder="Digite a tecnologia"
            {...register("title")}
          ></StyledInput>
          <StyledInput
            select
            defaultValue={"Iniciante"}
            label="Nível"
            {...register("status")}
          >
            <MenuItem value={"Avançado"}>Avançado</MenuItem>
            <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
            <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
          </StyledInput>

          <StyledButton type="submit" color="#59323F" width="100%">
            Registrar tecnologia
          </StyledButton>
        </form>
      </div>
    </>
  );
}

export default ModalRegister;
