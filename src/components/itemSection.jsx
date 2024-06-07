import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./itemCard";
function ItemSection({ data }) {
  console.log(data.data);
  return (
    <div className="text-gray-400 flex-wrap bg-gray-200 body-font flex container px-5 py-5 mx-auto">
      {data.data.map((item) => (
        <ItemCard key={item.itemNumber} data={item} /> // Use item.id for unique key
      ))}
    </div>
  );
}

export default ItemSection;
