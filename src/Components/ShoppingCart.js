import React from "react";
import { Offcanvas, Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import storeItems from "../data/StoreItems.json";

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        {/* X button to close the cart */}
        <Button
          variant="outline-secondary"
          className="ms-auto"
          onClick={closeCart}
          aria-label="Close cart"
        >
          &times;
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
