const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes
//create item
app.post("/items", async (req, res) => {
  try {
    const { name, description, price, amount } = req.body;
    const newItem = await pool.query(
      "INSERT INTO items (name, description, price, amount) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, price, amount]
    );
    res.json(newItem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all items
app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get item by id
app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("SELECT * FROM items WHERE item_id = $1", [
      id,
    ]);
    res.json(item.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update item
app.put("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, amount } = req.body;
    const updateItem = await pool.query(
      "UPDATE items SET name = $1, description = $2, price = $3, amount = $4 WHERE item_id = $5",
      [name, description, price, amount, id]
    );
    res.json("Item updated");
    //res.json(updateItem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//delete item
app.delete("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query(
      "DELETE FROM items WHERE item_id = $1",
      [id]
    );
    res.json("Item deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
