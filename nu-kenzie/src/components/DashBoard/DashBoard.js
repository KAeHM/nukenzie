import { useState } from "react";
import GetReceita from "../GetReceita/GetReceita";
import List from "../List/List";
import PrecoTotal from "../PreçoTotal/PrecoTotal";
import logo from "./../src/Nu_Kenzie_1.png";
import "./style.css";

function DashBoard({ setIsLogged, islogged }) {
  const [extrato, setExtrato] = useState([]);
  const [selectedButton, setSelectedButton] = useState("Todos");

  return (
    <div className="dashBoard">
      <header className="dashBoardHeader">
        <img alt="logo" src={logo}></img>
        <button onClick={() => setIsLogged(!islogged)}>Inicio</button>
      </header>

      <main className="dashBoardMain">
        <div>
          <GetReceita
            setSelectedButton={setSelectedButton}
            extrato={extrato}
            setExtrato={setExtrato}
          ></GetReceita>
          {extrato.length > 0 ? (
            <PrecoTotal extrato={extrato}></PrecoTotal>
          ) : (
            false
          )}
        </div>
        <List
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          extrato={extrato}
          setExtrato={setExtrato}
        ></List>
      </main>
    </div>
  );
}

export default DashBoard;
