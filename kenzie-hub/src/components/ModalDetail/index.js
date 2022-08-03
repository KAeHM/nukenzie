import { StyledInput, StyledButton } from "./style";
import { useForm } from "react-hook-form";
import { MenuItem } from "@mui/material";
import { API } from "./../../Sources/Api";

function ModalDetail({
  infoModal,
  toast,
  atualizarLista,
  setModalDetail,
  modalDetail,
}) {
  const { register, handleSubmit } = useForm();

  function DeletarItem(id) {
    const promisse = API.delete("/users/techs/" + id, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then((response) => response);

    toast.promise(promisse, {
      loading: "Carregando...",
      success: () => {
        atualizarLista();
        setModalDetail(!modalDetail);
        return "Tecnologia removida: " + infoModal.title;
      },
      error: (error) => "Algo deu errado: " + error,
    });
  }

  const onSubmit = (data) => {
    console.log(data);
    const promisse = API.put("/users/techs/" + infoModal.id, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then((response) => response);

    toast.promise(promisse, {
      loading: "Carregando...",
      success: (response) => {
        atualizarLista();
        setModalDetail(!modalDetail);
        return "Nível alterado para: " + response.data.status;
      },
      error: (error) => "Algo deu errado: " + error,
    });
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
          Tecnologias Detalhes
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
          <StyledInput label={infoModal.title} disabled></StyledInput>
          <StyledInput
            select
            defaultValue={"Iniciante"}
            label={infoModal.status}
            {...register("status")}
          >
            <MenuItem value={"Avançado"}>Avançado</MenuItem>
            <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
            <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
          </StyledInput>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledButton type="submit" color="#59323F" width="180px">
              {" "}
              Atualizar Informações
            </StyledButton>
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                DeletarItem(infoModal.id);
              }}
              color="#868e96"
              width="100px"
            >
              Excluir
            </StyledButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default ModalDetail;
