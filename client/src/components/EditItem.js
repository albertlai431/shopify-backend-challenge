import React, { useState } from "react";

const EditItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [amount, setAmount] = useState(item.amount);

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

  const toggleModal = () => {
    setShow(!show);
  };

  const updateItem = async (event) => {
    if (
      !isNaN(price) &&
      !isNaN(amount) &&
      parseInt(price) >= 0 &&
      parseInt(amount) >= 0
    ) {
      try {
        const body = {
          name,
          description,
          price,
          amount,
        };
        const response = await fetch(
          `http://localhost:5000/items/${item.item_id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        toggleModal();
      } catch (error) {
        console.error(error.message);
      }
    } else {
      event.preventDefault();
      alert("Please enter a valid number for price and amount");
    }
  };

  return (
    <div>
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <h3>Update Item</h3>
          <form onSubmit={updateItem}>
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
            <input type="submit" value="Update Item" />
          </form>
          <button onClick={toggleModal}>Cancel</button>
        </section>
      </div>
      <button onClick={toggleModal}>Edit</button>
    </div>
  );
};

export default EditItem;
