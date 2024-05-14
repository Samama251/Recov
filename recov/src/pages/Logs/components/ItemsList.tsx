import { ItemCard } from "../../../components/ItemCard.tsx";
import { Link } from "react-router-dom";
import { PackageIcon } from "../../../../public/itemIcons/itemIcons.tsx";

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
          <ItemCard
            id={item.id}
            IconComponent={PackageIcon} // pass the icon component here
            itemName={item.itemName}
            description={item.description}
            dateReported={item.dateReported}
            category={item.category}
            status="Lost" // or "Found", depending on your data
          />
        </Link>
      ))}
    </>
  );
}
