import noCard from "./../src/NoCard.png";
import Card from "../Cards/Cards";
import { useState } from "react";
import "./style.css";

function List({ extrato, setSelectedButton, selectedButton, setExtrato }) {
  const [list, setList] = useState(extrato);

  function filterButton(button) {
    let type = button.innerText;
    setSelectedButton(type);

    if (type === "Todos") {
      setList(extrato);
    } else {
      let newList = extrato.filter((elem) => elem.typeValue + "s" === type);
      setList(newList);
    }
  }

  return (
    <div className="list">
      <div className="divFiltros">
        <p>Resumo financeiro</p>

        <div className="divButtons">
          <button
            style={
              selectedButton === "Todos"
                ? { color: "white", backgroundColor: "#fd377e" }
                : { color: "#5b6166", backgroundColor: "#e9ecef" }
            }
            onClick={(event) => filterButton(event.target)}
          >
            Todos
          </button>
          <button
            style={
              selectedButton === "Entradas"
                ? { color: "white", backgroundColor: "#fd377e" }
                : { color: "#5b6166", backgroundColor: "#e9ecef" }
            }
            onClick={(event) => filterButton(event.target)}
          >
            Entradas
          </button>
          <button
            style={
              selectedButton === "Saidas"
                ? { color: "white", backgroundColor: "#fd377e" }
                : { color: "#5b6166", backgroundColor: "#e9ecef" }
            }
            onClick={(event) => filterButton(event.target)}
          >
            Saidas
          </button>
        </div>
      </div>

      <div className="extratoList">
        {extrato.length !== 0 ? (
          <ul>
            <Card
              list={selectedButton === "Todos" ? extrato : list}
              setExtrato={setExtrato}
              setSelectedButton={setSelectedButton}
            ></Card>
          </ul>
        ) : (
          <div className="listaVazia">
            <p>Você ainda não possui nenhum lançamento</p>
            <img alt="noCard" src={noCard}></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
