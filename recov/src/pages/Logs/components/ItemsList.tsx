import { ItemCard } from "../../../components/ItemCard.tsx";
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

// Helper function to truncate a string
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

export function ItemsList({ items }: ItemsListProps) {
  return (
      <>
        {items.map((item, index) => (
              <ItemCard
                  id={item.id}
                  IconComponent={PackageIcon} // pass the icon component here
                  itemName={item.itemName}
                  description={truncateString(item.description, 25)} // Truncate the description to 100 characters
                  dateReported={item.dateReported}
                  category={item.category}
                  status="Lost" // or "Found", depending on your data
              />
        ))}
      </>
  );
}