import React from "react";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../StoreItem"; // Import StoreItem component
import StoreItems from "../data/StoreItems.json"; // StoreItems data

const Store = () => {
  return (
    <>
      <h1 className="mb-5">Shop</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
