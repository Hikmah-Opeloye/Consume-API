import React, { Component } from "react";
import { Card, CardColumns } from "react-bootstrap";

class Fooddata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.categories,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <CardColumns>
          {items.map((item) => (
            <Card key={item.idCategory} bg="dark" text="white">
              <Card.Img variant="top" src={item.strCategoryThumb} />
              <Card.Body>
                <Card.Title>{item.strCategory}</Card.Title>
                <Card.Text>{item.strCategoryDescription}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
      );
    }
  }
}

export default Fooddata;
