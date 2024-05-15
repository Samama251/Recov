// AdminClaimLogs.tsx
import { LogsHeader } from '../../components/LogsHeader.tsx';
import { Table } from './components/Table.tsx';
import {Pagination} from "../../components/Pagination.tsx";
import { useState } from 'react';
// import { deleteRecord } from './api'; // Import your API function

// Sample data for the table
const claimData = [
    {
        user: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            location: '123 Main St, Anytown USA'
        },
        item: {
            title: 'Lost Wallet',
            description: 'Leather wallet with ID and credit cards'
        },
        status: 'Accepted',
        dateReported: '2023-05-14',
        timestamp: new Date('2023-05-14T00:00:00').toISOString()
    },
    {
        user: {
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            location: '456 Elm St, Anytown USA'
        },
        item: {
            title: 'Lost Keys',
            description: 'Set of house and car keys on a keychain'
        },
        status: 'Accepted',
        dateReported: '2023-05-15',
        timestamp: new Date('2022-05-14T00:00:00').toISOString()

    },
    {
        user: {
            name: 'Bob Smith',
            email: 'bobsmith@example.com',
            location: '789 Pine St, Anytown USA',
            timestamp: new Date('2024-05-14T00:00:00').toISOString()

        },
        item: {
            title: 'Lost Phone',
            description: 'Black iPhone 12'
        },
        status: 'Rejected',
        dateReported: '2023-05-16',
        timestamp: new Date('2023-01-14T00:00:00').toISOString()
    },
    ];

export default function AdminReportLogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(claimData.length / itemsPerPage);

    const handleDelete = async (itemToDelete) => {
        // const response = await deleteRecord(itemToDelete.id); // Call your API function

        // if (response.success) {
        //     setData(data.filter(item => item !== itemToDelete));
        // } else {
        //     console.error('Failed to delete record:', response.error);
        // }
    };

    return (
        <div className="container mx-auto px-4  md:px-6 md:py-12">
            <LogsHeader title="User Logs" placeholder="          User Claim logs..." baseRoute="/home/user-logs" />
            <Table data={claimData} onDelete={handleDelete} />
            <Pagination currentPage={currentPage} totalPages={totalPages} baseRoute="/home/claim-logs" />
        </div>
    );
}
