import "./App.css";
import React from "react";

import InputItem from "./components/InputItem";
import ItemTable from "./components/ItemTable";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <h1>Inventory</h1>
      <InputItem />
      <ItemTable />
    </div>
  );
}

export default App;
