import Routes from "./Routes/routes";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ height: "100vh" }}>
        <Routes></Routes>
      </div>
    </>
  );
}

export default App;
