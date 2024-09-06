import React from "react";
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "./Components/FormatCurrency";
import "./Css/StoreItem.css";
import { useShoppingCart } from "./Context/ShoppingCartContext";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="mb-4 shadow-sm img-scale">
      <Card.Img
        src={imgUrl}
        alt={name}
        className="store-item-img img-fluid rounded"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-5">{name}</span>
          <span className="text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-3">
          {quantity === 0 ? (
            <Button
              className="w-100 btn-primary"
              onClick={() => increaseQuantity(id)}
            >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  size="sm"
                  className="quantity-control"
                  onClick={() => decreaseQuantity(id)}
                >
                  -
                </Button>
                <span className="mx-3 fs-5">{quantity} in cart</span>
                <Button
                  size="sm"
                  className="quantity-control"
                  onClick={() => increaseQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                size="sm"
                variant="danger"
                className="remove-btn mx-3"
                onClick={() => removeQuantity(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
