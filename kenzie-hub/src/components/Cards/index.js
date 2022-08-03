import { StyledLi } from "./style";

function Card({ setModalDetail, modalDetail, elem, setInfoModal }) {
  return (
    <StyledLi
      onClick={() => {
        setInfoModal(elem);
        setModalDetail(!modalDetail);
      }}
    >
      <h3 style={{ color: "#f8f9fa", fontSize: "1rem" }}>{elem.title}</h3>
      <span style={{ fontSize: "12px", color: "#868e96" }}>{elem.status}</span>
    </StyledLi>
  );
}

export default Card;
