import { DivMain, FlexBox } from "./../../style";
import { StyledButton, StyledUl } from "./style";
import Card from "./../../components/Cards";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useEffect, useState } from "react";
import ModalDetail from "../../components/ModalDetail";
import ModalRegister from "../../components/ModalRegister";
import { API } from "./../../Sources/Api";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const [modalDetail, setModalDetail] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState({});
  const [infoModal, setInfoModal] = useState({});
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));
  let { id } = useParams();

  function atualizarLista() {
    API.get("/users/" + id).then((response) => {
      setTechs(response.data.techs);
      setUser(response.data);
    });
  }

  const history = useHistory();

  useEffect(atualizarLista, [id]);

  return (
    <DivMain padding={"0px 10px"} alignItems={"center"} direction={"column"}>
      {!isLogged && history.push("/")}
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
        width={"100%"}
        maxWidth={"1300px"}
        height={"80px"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "#FF577F", fontSize: "1.5rem" }}>Kenzie Hub</h1>
        <StyledButton
          onClick={() => {
            setIsLogged("");
          }}
          width="70px"
          color="#212529"
        >
          Sair
        </StyledButton>
      </FlexBox>

      <FlexBox
        border={"1px solid #212529"}
        width={"100%"}
        height={"117px"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <h2 style={{ color: "#f8f9fa", fontSize: "calc(1rem + 0.4vw)" }}>
          Olá, {user.name}
        </h2>
        <span style={{ fontSize: "12px", color: "#868e96" }}>
          {user.course_module}
        </span>
      </FlexBox>

      <FlexBox
        maxWidth={"1300px"}
        width={"100%"}
        height={"70px"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <h2 style={{ color: "#f8f9fa", fontSize: "1rem" }}>Tecnologias</h2>
        <StyledButton
          onClick={() => {
            setModalRegister(!modalRegister);
          }}
          height={"33px"}
          width={"35px"}
          color="#212529"
        >
          <AddRoundedIcon />
        </StyledButton>
      </FlexBox>

      <FlexBox
        maxWidth={"1300px"}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <StyledUl>
          {techs &&
            techs.map((elem) => {
              return (
                <Card
                  setInfoModal={setInfoModal}
                  key={elem.id}
                  elem={elem}
                  modalDetail={modalDetail}
                  setModalDetail={setModalDetail}
                ></Card>
              );
            })}
        </StyledUl>
      </FlexBox>

      <Rodal
        customStyles={{
          padding: 0,
          background: "#212529",
          width: "315px",
          height: "342px",
        }}
        visible={modalDetail}
        onClose={() => setModalDetail(!modalDetail)}
      >
        <ModalDetail
          toast={toast}
          atualizarLista={atualizarLista}
          infoModal={infoModal}
          setModalDetail={setModalDetail}
          modalDetail={modalDetail}
        ></ModalDetail>
      </Rodal>

      <Rodal
        customStyles={{
          padding: 0,
          background: "#212529",
          width: "315px",
          height: "342px",
        }}
        visible={modalRegister}
        onClose={() => setModalRegister(!modalRegister)}
      >
        <ModalRegister
          toast={toast}
          atualizarLista={atualizarLista}
          techs={techs}
        ></ModalRegister>
      </Rodal>
    </DivMain>
  );
}

export default DashBoard;
