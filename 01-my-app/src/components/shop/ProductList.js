import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import data from "../../data/product.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="g-5">
        {data.map((product) => {
          return (
            <Col md={3}>
              <Product
                title={product.title}
                image={product.image}
                desk={product.desk}
                price={product.price}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
