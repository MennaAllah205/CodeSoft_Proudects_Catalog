import React from "react";
import { Stack, Button } from "react-bootstrap";
import storeItems from "../data/StoreItems.json";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const CartItems = ({ id, quantity }) => {
  const { removeQuantity } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="d-flex align-items-center mb-3 p-2 border rounded shadow-sm bg-light"
    >
      {/* Cart Item Image */}
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "100px", height: "75px", objectFit: "cover" }}
        className="rounded"
      />

      {/* Cart Item Details */}
      <div className="me-auto">
        <div className="fw-bold">
          {item.name}{" "}
          {quantity > 1 && <span className="text-muted">x{quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: "0.9rem" }}>
          {FormatCurrency(item.price)} each
        </div>
      </div>
      <div className="fw-bold">{FormatCurrency(item.price * quantity)}</div>

      {/* Remove Button */}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeQuantity(id)}
        className="ms-2"
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItems;
