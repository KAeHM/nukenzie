import { Switch, Route } from "react-router-dom";
import DashBoard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login></Login>
      </Route>

      <Route exact path="/register">
        <Register></Register>
      </Route>

      <Route path="/dashboard/:id">
        <DashBoard></DashBoard>
      </Route>
    </Switch>
  );
}

export default Routes;
