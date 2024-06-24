 
"use client";

import Item from "./item";
import List from "./items.json";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [color, setColor] = useState("name");
  const data = [...List].sort((a, b) => {
    if (sortBy === "category") {
      if (a.category < b.category) return -1;
    }
    if (sortBy === "name") {
      if (a.name < b.name) return -1;
    }
  });

  const nameClick = () => {
    setSortBy("name");
    setColor("name");
  };
  const categoryClick = () => {
    setSortBy("category");
    setColor("category");
  };
  return (
    <div className="flex flex-col gap-3 items-start">
      <div className="flex flex-row gap-5 items-center">
        <p className="p-2">Sort by:</p>
        <button
          className={`p-2 ${
            color === "name" ? "bg-blue-400" : "bg-blue-600"
          }`}
          onClick={nameClick}
        >
          Name
        </button>
        <button
          className={`p-2 ${
            color === "category" ? "bg-blue-400" : "bg-blue-600"
          }`}
          onClick={categoryClick}
        >
          Category
        </button>
      </div>
      {data.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemList;