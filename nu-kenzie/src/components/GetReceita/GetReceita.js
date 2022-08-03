import { useState } from "react";
import "./style.css";

function GetReceita({ setExtrato, extrato, setSelectedButton }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [typeValue, setTypeValue] = useState("Entrada");

  const obj = {
    description,
    value,
    typeValue,
  };

  return (
    <div className="cardInputs">
      <form className="formInputs">
        <div className="inputDescription">
          <label>Descrição</label>
          <input
            placeholder="Digite sua descrição aqui"
            onChange={(event) => setDescription(event.target.value)}
            type="text"
          ></input>
          <span>Ex: Compras de roupa</span>
        </div>

        <div className="inputValues">
          <div className="divInputValue">
            <label>Valor</label>
            <input
              placeholder="R$"
              className="inputValue"
              onChange={(event) => setValue(event.target.value)}
              type="number"
            ></input>
          </div>

          <div className="divInputType">
            <label>Tipo de valor</label>
            <select onChange={(event) => setTypeValue(event.target.value)}>
              <option value={"Entrada"}>Entrada</option>
              <option value={"Saida"}>Saida</option>
            </select>
          </div>
        </div>

        <button
          onClick={(event) => (
            <>
              {event.preventDefault()}
              {setExtrato([obj, ...extrato])}
              {setSelectedButton("Todos")}
            </>
          )}
        >
          Inserir Valor
        </button>
      </form>
    </div>
  );
}

export default GetReceita;
