// AdminReportLogs.tsx
import { Table } from "./components/Table.tsx";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination.tsx";
import { LogsHeader } from "../../components/LogsHeader.tsx";
import {ListLoader} from "../../../public/Loader/ListLoader"; // Import ListLoader

export default function AdminReportLogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [claimData, setClaimData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Added for loading state
  const totalPages = Math.ceil(claimData.length / itemsPerPage);

  const fetchClaimData = async () => {
    setIsLoading(true); // Set loading state to true before fetching data
    console.log("Fetching data...");
    const apiResponse = await fetch(
        `http://localhost:3000/api/v1/items/getItemsForAdmin/?page=${currentPage}`
    );
    const response = await apiResponse.json();
    if (response.ok) {
      setClaimData(response.data.items);
    } else {
      console.log("Error fetching data");
    }
    setIsLoading(false); // Set loading state to false after fetching data
  };
  useEffect(() => {
    fetchClaimData();
  }, [currentPage]);

  return (
      <div className="container mx-auto px-4  md:px-6 md:py-12">
        <LogsHeader
            title="Report Logs"
            placeholder="          Search Report logs..."
            baseRoute="/home/report-logs"
        />
        {isLoading && <ListLoader/>}
        {!isLoading && (
            <>
              <Table data={claimData} />
              <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  baseRoute="/home/claim-logs"
                  onPageChange={() => setCurrentPage}
              />
            </>
        )}
      </div>
  );
}