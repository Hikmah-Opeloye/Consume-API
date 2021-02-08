import "./App.css";
import { Container, Row, Jumbotron } from "react-bootstrap";
import Fooddata from "./component/food";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Meals.....yum!</h1>
        <p>This application collects meals from Themealdb</p>
      </Jumbotron>
      <Container>
        <Row>
          <Fooddata />
        </Row>
      </Container>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
