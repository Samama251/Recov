import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogsHeader } from "./components/LogsHeader.tsx";
import { ItemsList } from "./components/ItemsList.tsx";
import { useParams } from "react-router-dom";
const fetchItemsForPage = async (page) => {
  try {
    console.log("Fetching items");
    const response = await fetch(
      `http://localhost:3000//api/v1/items?page=${page}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log("Error fetching items");
    console.error(error);
  }
};

export default function Logs() {
  const location = useLocation();
  const navigate = useNavigate();
  const { page: pageParam } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [sortOption, setSortOption] = useState("dateReported");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetchItemsForPage(currentPage);
      setItems(response);
    };

    // Fetch items whenever the currentPage changes
    fetchItems();
  }, [currentPage]); // Dependency on currentPage

  // Separate effect to handle page updates from query params or route
  useEffect(() => {
    const newPage = Number(pageParam) || Number(searchParams.get("page")) || 1;
    setCurrentPage(newPage);
  }, [location.search, pageParam]); // Dependencies updated
  return (
    <main className="container mx-auto py-12 px-4 sm:px-6">
      <LogsHeader
        sortOption={sortOption}
        setSortOption={setSortOption}
        items={items}
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        <ItemsList items={items} />
      </div>
      <div className="flex justify-center gap-5">
        <button
          className=" h-16 mt-5 text-lg cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
          onClick={() => navigate(`?page=${currentPage - 1}`)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className=" h-16 text-lg mt-5 cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
          onClick={() => navigate(`?page=${currentPage + 1}`)}
        >
          Next Page
        </button>
      </div>
    </main>
  );
}
