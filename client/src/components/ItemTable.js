import React, { useState, useEffect } from "react";
import EditItem from "./EditItem";
const converter = require("json-2-csv");
//const fs = require("fs");

const ItemTable = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/items/");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
      });
      setItems(items.filter((item) => item.item_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const downloadCSV = async () => {
    converter.json2csv(items, (err, csv) => {
      if (err) {
        throw err;
      }

      const blob = new Blob([csv], {
        type: "text/csv, charset=UTF-8",
      });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "export.csv";
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      });
    });
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <h3>Inventory Table</h3>
      <button onClick={downloadCSV}>Download CSV</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.amount}</td>
              <td>
                <EditItem item={item} />
              </td>
              <td>
                <button onClick={() => deleteItem(item.item_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
