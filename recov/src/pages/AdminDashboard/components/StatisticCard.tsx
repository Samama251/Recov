// StatisticCard.tsx
import { CardHeader, CardContent, Card } from "../../../../@/components/ui/card";
import { PieChart } from './PieChart';
import { BarChart } from './BarChart.tsx';
import { ReportTable } from './ReportTable.tsx';
import { useState } from 'react';

const pieChartData=[
    { id: "Jan", value: 111 },
{ id: "Feb", value: 157 },
{ id: "Mar", value: 129 },
{ id: "Apr", value: 150 },
{ id: "May", value: 119 },
{ id: "Jun", value: 72 },
]

const barChartData=[
    { name: "Jan", count: 111 },
{ name: "Feb", count: 157 },
{ name: "Mar", count: 129 },
{ name: "Apr", count: 150 },
{ name: "May", count: 119 },
{ name: "Jun", count: 72 },
]


const tableData = [
  { reportId: 'REP001', status: 'Pending', reportedBy: 'John Doe', date: '2023-05-01' },
  { reportId: 'REP002', status: 'Resolved', reportedBy: 'Jane Smith', date: '2023-04-28' },
  { reportId: 'REP003', status: 'Pending', reportedBy: 'John Smith', date: '2024-04-24' },
  { reportId: 'REP005', status: 'Pending', reportedBy: 'Samama Smith', date: '2022-06-28' },
  { reportId: 'REP007', status: 'Resolved', reportedBy: 'Semen Smith', date: '2023-02-28' },
  // Add more data as needed
];

// StatisticCard.tsx
export function StatisticCard() {
  const [selectedOption, setSelectedOption] = useState('Lost Items Category');

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-center pb-2">
        <button onClick={() => handleClick('Lost Items Category')}
                className="text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out">
          Lost Items Category
        </button>
        <button onClick={() => handleClick('Recent Reports')}
                className="text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out ml-4">
          Reports Table
        </button>
        <button onClick={() => handleClick('Lost Items Over Time')}
                className="text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out ml-4">
          Lost Items Over Time
        </button>
      </CardHeader>
      <CardContent>
        {selectedOption === 'Lost Items Category' && <BarChart data={barChartData}/>}
        {selectedOption === 'Recent Reports' && <ReportTable data={tableData} />}
        {selectedOption === 'Lost Items Over Time' && <PieChart data={pieChartData} />}
      </CardContent>
    </Card>
  );
}

