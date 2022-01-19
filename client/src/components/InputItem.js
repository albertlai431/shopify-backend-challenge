import React, { useState } from "react";

const InputItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const addItem = async (event) => {
    //event.preventDefault();
    const body = {
      name,
      description,
      price: parseInt(price),
      amount,
    };
    const response = await fetch("http://localhost:5000/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    setName("");
    setDescription("");
    setPrice("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Item</h3>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
          required
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          required
        />
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default InputItem;
