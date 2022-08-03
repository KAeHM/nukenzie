import logo from "./../src/Nu_Kenzie.png";
import imagemDecorativa from "./../src/setupTests.png";
import "./style.css";

function HomePage({ setIsLogged, islogged }) {
  return (
    <div className="homePage">
      <main className="homePageContent">
        <div className="homePageContent--Text">
          <img alt="Logo" src={logo}></img>
          <h2>Centralize o controle das suas finanças</h2>
          <span>de forma rápida e segura</span>
          <button onClick={() => setIsLogged(!islogged)}>Iniciar</button>
        </div>

        <div className="homePageContent--img">
          <img
            src={imagemDecorativa}
            alt="imagemDecorativa"
            className="imagemDecorativa"
          ></img>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
