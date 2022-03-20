import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [ dark, setDark ]= useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = dark ? "App dark" : "App light"
  const handleClick = () => dark ? false : true
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>setDark(handleClick())}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
