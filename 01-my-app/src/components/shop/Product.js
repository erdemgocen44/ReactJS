import React from "react";
import { Button, Card } from "react-bootstrap";
const Product = (props) => {
  const { image, title, desk, price } = props;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={require(`../../assets/img/${image}`).default}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desk}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="warning">Add Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
