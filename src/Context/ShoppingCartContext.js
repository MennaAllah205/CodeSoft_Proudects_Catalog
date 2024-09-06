import { createContext, useContext, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import storeItems from "../data/StoreItems.json"; // Fetch item details from here

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeQuantity = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const openCart = () => {
    setOpen(true);
  };

  const closeCart = () => {
    setOpen(false);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Function to get full item details from storeItems based on cart item ID
  const getFullItemDetails = (id) => {
    return storeItems.find((item) => item.id === id);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeQuantity,
        openCart,
        closeCart,
        totalItems,
        getFullItemDetails, // Expose function to fetch item details
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export default ShoppingCartProvider;
