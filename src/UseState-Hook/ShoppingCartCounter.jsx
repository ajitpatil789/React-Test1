import React, { useState } from "react";

function ShoppingCartCounter() {
  const [itemCount, setItemCount] = useState(0);
  const addItem = () => {
    // setItemCount(itemCount + 1);
    setItemCount((prevCount) => prevCount + 1);
  };
  const removeItem = () => {
    //   setItemCount(itemCount - 1);
    setItemCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h2>Shopping Cart</h2>
      <p>Item In Cart: {itemCount}</p>
      <button
        onClick={addItem}
        style={{ marginRight: "10px", padding: "10px" }}
      >
        Add Item
      </button>
      <button onClick={removeItem} style={{ padding: "10px" }}>
        Remove Item
      </button>
    </div>
  );
}

export default ShoppingCartCounter;
