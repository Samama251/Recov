// AdminClaimLogs.tsx
import { LogsHeader } from "../../components/LogsHeader";
import { Table } from "./components/Table";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination.tsx";
// import { deleteRecord } from './api'; // Import your API function

export default function ClaimLogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [claimData, setClaimData] = useState([]);
  const [error, setError] = useState(null); // Added for error handling
  const [totalPages, setTotalPages] = useState(1); // Added for pagination

  const getClaimData = async () => {
    try {
      console.log("Fetching data ");
      const response = await fetch(
        `http://localhost:3000/api/v1/claim/getClaim?page=${currentPage}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch claims");
      } else {
        setClaimData(data.data);
        setTotalPages(data.totalPages); // Set total pages
      }
    } catch (err) {
      console.error(err);
      setError(err.message); // Set error state
    }
  };
  // Added error message display
  const handleDelete = async (itemToDelete) => {
    return null;
  };
  if (error) {
    return <div>Error: {error}</div>;
  }

  useEffect(() => {
    getClaimData();
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4  md:px-6 md:py-12">
      <LogsHeader
        title="Claim Logs"
        placeholder="          Search Claim logs..."
        baseRoute="/home/claim-logs"
      />
      <Table data={claimData} onDelete={handleDelete} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseRoute="/home/claim-logs"
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
