import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import DashBoard from "./components/DashBoard/DashBoard";
import { useState } from "react";

function App() {
  const [islogged, setIsLogged] = useState(false);

  return islogged ? (
    <DashBoard islogged={islogged} setIsLogged={setIsLogged}></DashBoard>
  ) : (
    <HomePage islogged={islogged} setIsLogged={setIsLogged}></HomePage>
  );
}

export default App;
