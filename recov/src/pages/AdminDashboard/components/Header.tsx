import { Link } from 'react-router-dom';
import { Button } from "../../../../@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../../../@/components/ui/dropdown-menu";
import { PageIcon } from "../../../../public/pageIcon/pageIcon.tsx";

export function Header() {
  return (
    <header className="flex h-20 py-14 items-center justify-between border-b bg-white px-8 dark:border-gray-800 dark:bg-gray-950">
      <Link className="flex items-center gap-3" to="#">
        <PageIcon className="h-16 w-16" />
        <span className="text-3xl font-semibold">Lost & Found</span>
      </Link>
      <nav className="hidden gap-8 text-base font-medium md:flex pr-5 mr-10">
        <Link className="text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Dashboard
        </Link>
        <Link className="text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Lost Items
        </Link>
        <Link className="text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Found Items
        </Link>
        <Link className="text-gray-500 text-2xl  hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Reports
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}