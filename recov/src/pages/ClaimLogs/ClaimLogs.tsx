// ClaimLogs.tsx
import { Header } from './components/Header';
import { Table } from './components/Table';

// Sample data for the table
const data = [
    {
        user: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '555-1234',
            location: '123 Main St, Anytown USA'
        },
        item: {
            title: 'Lost Wallet',
            description: 'Leather wallet with ID and credit cards'
        },
        status: 'Pending',
        dateReported: '2023-05-14'
    },
    // More data objects...
];

export default function ClaimLogs() {
    return (
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <Header />
            <Table data={data} />
        </div>
    );
}