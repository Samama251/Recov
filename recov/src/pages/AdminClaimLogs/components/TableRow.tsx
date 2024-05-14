// TableRow.tsx
import { Button } from "../../../../@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "../../../../@/components/ui/dropdown-menu";
import { Trash2Icon, XIcon, CheckIcon, EyeIcon } from "../../../../public/itemIcons/itemIcons.tsx";

export function TableRow({ data }) {
    return (
        <tr className="border-b">
            <td className="px-4 py-4 flex flex-col items-start sm:flex-row sm:items-center sm:px-6">
                <img alt="User Avatar" className="w-10 h-10 rounded-full mr-4 mb-2 sm:mb-0" src="/placeholder.svg" />
                <div>
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-gray-500">{data.user.email}</p>
                </div>
            </td>
            <td className="px-4 py-4 sm:px-6">
                <div>
                    <p className="font-medium">{data.item.title}</p>
                    <p className="text-gray-500">{data.item.description}</p>
                </div>
            </td>
            <td className="px-4 py-4 sm:px-6">
                <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    {data.status}
                </span>
            </td>
            <td className="px-4 py-4 flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2 sm:px-6">
                <Button className="text-green-500 hover:bg-green-100 focus:ring-green-500" size="sm" variant="outline">
                    <CheckIcon className="w-4 h-4" />
                    Accept
                </Button>
                <Button className="text-red-500 hover:bg-red-100 focus:ring-red-500" size="sm" variant="outline">
                    <XIcon className="w-4 h-4" />
                    Deny
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="outline">
                            <EyeIcon className="w-4 h-4" />
                            <span className="sr-only">View Details</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Claim Details</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="grid gap-4 p-4">
                            <div>
                                <h3 className="font-medium">Title</h3>
                                <p>{data.item.title}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Description</h3>
                                <p>{data.item.description}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Phone</h3>
                                <p>{data.user.phone}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Location</h3>
                                <p>{data.user.location}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p>{data.user.email}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Date Reported</h3>
                                <p>{data.dateReported}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Image</h3>
                                <img alt="Claim Image" className="w-full rounded-md" src="/placeholder.svg" />
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button className="text-red-500 hover:bg-red-100 focus:ring-red-500" size="sm" variant="outline">
                    <Trash2Icon className="w-4 h-4" />
                </Button>
            </td>
        </tr>
    );
}