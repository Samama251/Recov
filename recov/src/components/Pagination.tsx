// Pagination.js
import { useNavigate, useLocation } from 'react-router-dom';

export function Pagination({ currentPage, totalPages, baseRoute }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pages = [...Array(totalPages).keys()].map(i => i + 1);
    const current = Number(currentPage); // Convert currentPage to a number

    const changePage = (page) => {
        const url = new URL(location.pathname, window.location.origin);
        url.searchParams.set('page', page);
        navigate(url.pathname + url.search);
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                className="h-16 text-lg mx-8 cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                onClick={() => changePage(current )} // Use current instead of currentPage
                disabled={current === totalPages} // Use current instead of currentPage
            >
                Previous Page
            </button>

            <button
                className="h-16 text-lg mx-8 cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                onClick={() => changePage(current + 1)} // Use current instead of currentPage
                disabled={current === totalPages} // Use current instead of currentPage
            >
                Next Page
            </button>
        </div>
    );
}