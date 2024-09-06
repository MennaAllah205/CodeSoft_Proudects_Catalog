import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const { getItemQuantity, increaseQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{FormatCurrency(price)}</Card.Text>
        <Button onClick={() => increaseQuantity(id)} variant="primary">
          {quantity > 0 ? `In Cart (${quantity})` : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
