import entrada from "./../src/statusEntrada.png";
import saida from "./../src/statusSaida.png";
import lixo from "./../src/lixo.png";
import "./style.css";

function Card({ list, setExtrato, setSelectedButton }) {
  function removerCard(item) {
    let newList = list.filter((elem) => (elem !== item ? elem : false));
    setExtrato(newList);
    setSelectedButton("Todos");
  }

  return (
    <>
      {list.map((elem, index) => (
        <li key={index}>
          {elem.typeValue === "Entrada" ? (
            <img alt="entrada" src={entrada} className="status"></img>
          ) : (
            <img alt="entrada" src={saida} className="status"></img>
          )}
          <div className="cardTitles">
            <p className="cardDescription">{elem.description}</p>
            <span className="cardTypeValue">{elem.typeValue}</span>
          </div>
          <div className="cardAction">
            <p className="cardValue">R${elem.value}</p>
            <button className="cardRemove">
              <img
                onClick={() => removerCard(elem)}
                alt="lixo"
                src={lixo}
              ></img>
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

export default Card;
