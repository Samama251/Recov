import { ItemCard } from "../../../components/ItemCard.tsx";
import React from "react";
import { Link } from "react-router-dom";

interface Item {
  id: string; // added id to the Item interface
  itemName: string;
  description: string;
  dateReported: string;
  category: string;
}

interface ItemsListProps {
  items: Item[];
}

export function ItemsList({ items }: ItemsListProps) {
  return (
    <>
      {items.map((item, index) => (
        <Link to={`/home/logs/item/${item.id}`} key={index}>
          {" "}
          {/* added Link component */}
          <ItemCard
            itemName={item.itemName}
            description={item.description}
            dateReported={item.dateReported}
            category={item.category}
          />
        </Link>
      ))}
    </>
  );
}
