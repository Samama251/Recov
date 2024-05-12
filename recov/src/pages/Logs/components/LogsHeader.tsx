import { Link } from "react-router-dom";
import { PageIcon } from "../../../../public/pageIcon/pageIcon.tsx";
import {
  BadgeIcon,
  CalendarIcon,
  FilterIcon,
  SearchIcon,
  TagIcon,
} from "../../../../public/itemIcons/itemIcons.tsx";
import { Input } from "../../../../@/components/ui/input.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../@/components/ui/dropdown-menu.tsx";
import { Button } from "../../../../@//components/ui/button.tsx";
import React from "react";

// Define the item type
interface Item {
  dateReported: string;
  itemName: string;
  status: string;
}

interface LogsHeaderProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  items: Item[];
}

export function LogsHeader({
  sortOption,
  setSortOption,
  items,
}: LogsHeaderProps) {
  // Sort items based on sortOption
  // const sortedItems = [...items].sort((a, b) => {
  //   switch (sortOption) {
  //     case 'dateReported':
  //       return (
  //         new Date(b.dateReported).getTime() -
  //         new Date(a.dateReported).getTime()
  //       );
  //     case 'itemName':
  //       return a.itemName.localeCompare(b.itemName);
  //     case 'status':
  //       return a.status.localeCompare(b.status);
  //     default:
  //       return 0;
  //   }
  // });

  return (
    <div className="flex flex-col items-start justify-between mb-6 gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <Link
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          to="/home"
        >
          <PageIcon className="w-36 h-36" />
        </Link>
        <h1 className="text-5xl mt-3 font-bold">Lost & Found Logs</h1>
      </div>
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-initial">
          <SearchIcon className="absolute left-3 pr-6 top-1/2 -translate-y-1/2 w-14 h-14 text-gray-500" />
          <Input
            className="w-full pr-32 py-8 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:w-auto"
            placeholder="           Search logs..."
            type="text"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="px-2" size="sm" variant="outline">
              <FilterIcon className="pl-2 w-12 h-12 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="text-lg pb-1">
              Sort by
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setSortOption("dateReported")}
              className="mb-2 p-1 hover:bg-gray-300 active:bg-gray-400 transition-colors"
            >
              <CalendarIcon className="w-8 h-8 mr-2" />
              Date reported
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSortOption("itemName")}
              className="mb-2 p-1 hover:bg-gray-300 active:bg-gray-400 transition-colors"
            >
              <TagIcon className="w-8 h-8  mr-2" />
              Item name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSortOption("status")}
              className="mb-2 p-1 hover:bg-gray-300 active:bg-gray-400 transition-colors"
            >
              <BadgeIcon className="w-8 h-8  mr-2" />
              Status
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
