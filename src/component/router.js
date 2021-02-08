import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
import foodUI from "./foodUI";

//create path when app first loads and set a different route for details page
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/details/:id" component={foodUI} />
    </Switch>
  </BrowserRouter>
);
export default Router;
