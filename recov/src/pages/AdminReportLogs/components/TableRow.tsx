// TableRow.tsx
import { Button } from "../../../../@/components/ui/button";
import { Trash2Icon, XIcon, CheckIcon, EyeIcon } from "../../../../public/itemIcons/itemIcons.tsx";
import  { useState } from 'react';
// import {LoggedClaimDetails} from './LoggedClaimDetails/LoggedClaimDetails.tsx'; // Import your modal component

export function TableRow({ data, onAccept = () => console.log('Accept clicked'), onReject = () => console.log('Reject clicked'), onDelete = () => console.log('Delete clicked') }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (data) => {
        console.log('View Details clicked', data);
        setIsModalOpen(true);
    };

    let statusColor;
    if (data.status === 'Pending') {
        statusColor = 'bg-yellow-100';
    } else if (data.status === 'Accepted') {
        statusColor = 'bg-green-100';
    } else if (data.status === 'Rejected') {
        statusColor = 'bg-red-100';
    }

    return (
        <tr className="border-b-2 p4 p-0">
            <div className="px-10 pb-6 flex flex-col items-start sm:flex-row sm:items-center sm:px-6">
                <div className="px-4 sm:px-6">
                    <h1 className="text-xl mt-0">{data.user.name}</h1>
                    <h1 className="text-gray-500 text-lg">{data.user.email}</h1>
                </div>
            </div>
            <td className="px-16  sm:px-6">
                <div>
                    <p className="text-xl px-16 ">{data.item.title}</p>
                    <p className="text-gray-500 px-16 text-lg">{data.item.description}</p>
                </div>
            </td>
            <td className="px-4 sm:px-6">
                <span
                    className={`inline-flex px-16 items-center px-10 text-xl py-2 rounded-full  font-medium ${statusColor}`}>
                    {data.status}
                </span>
            </td>
            <div >
                <td >
                    <div className="ml-16  py-9 flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5 sm:px-6">
                        <Button
                            onClick={() => onAccept(data)}
                            className="text-green-500 px-5 py-6 hover:bg-green-100 focus:ring-green-500"
                            size="sm"
                            variant="outline"
                        >
                            <CheckIcon className="w-9 h-9"/>
                            <p className="text-lg">Accept</p>
                        </Button>
                        <Button
                            onClick={() => onReject(data)}
                            className="text-red-500 hover:bg-red-100 px-4 py-6 focus:ring-red-500" size="sm"
                            variant="outline"
                        >
                            <XIcon className="w-9 h-9"/>
                            <p className="text-lg">Deny</p>
                        </Button>
                        <Button
                            onClick={() => handleViewDetails(data)}
                            className="px-4 py-6" variant="outline"
                        >
                            <EyeIcon className="w-6 h-6 "/>
                            <span className="sr-only ">View Details</span>
                        </Button>
                        <Button
                            onClick={() => onDelete(data)}
                            className="px-4 py-6 text-red-500 hover:bg-red-100 focus:ring-red-500" size="sm"
                            variant="outline"
                        >
                            <Trash2Icon className="w-6 h-6"/>
                        </Button>
                    </div>
                </td>
            </div>
            {/*<LoggedClaimDetails isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={data.item} />*/}
        </tr>
    );
}