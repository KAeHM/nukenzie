import "./style.css";

function PrecoTotal({ extrato }) {
  function valorTotal() {
    let sum = 0;
    if (extrato.length > 0) {
      extrato.forEach((elem) => {
        if (elem.typeValue === "Saida") {
          sum -= parseInt(elem.value);
        } else {
          sum += parseInt(elem.value);
        }
      });
    }
    return sum;
  }

  return (
    <div className="Card">
      <div className="CardText">
        <p>Valor Total</p>
        <span>O valor se refere ao saldo</span>
      </div>

      <p className="CardValue">$ {valorTotal()}</p>
    </div>
  );
}

export default PrecoTotal;
