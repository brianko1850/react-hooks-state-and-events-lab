import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 const [ selectedCategory, setSelectedCategory ] = useState(items)
 const [ category, setCategory ] = useState("All")
 const newItems = selectedCategory.filter(item => {
  if (category === "All") {
    return true
  }
  return item.category === category})
 const handleClick = (newCategory)=>{
   setCategory(newCategory)

 }

 return (
  <div className="ShoppingList">
    <div className="Filter">
      <select name="filter" onChange = {(e)=>{handleClick(e.target.value)}}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
    <ul className="Items">
      {newItems.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  </div>
);
}

export default ShoppingList;