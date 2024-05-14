import {Link} from "react-router-dom";
import { PageIcon } from "../../../../public/pageIcon/pageIcon.tsx"

// Header.js
export function Header() {
    return (
        <header className="flex items-center justify-between mb-6">
            <div className="flex items-center">
                <Link className="inline-flex items-center mr-6" to="#">
                    <PageIcon className="w-5 h-5 mr-2" />
                    <span className="font-medium">Home</span>
                </Link>
                <h1 className="text-2xl font-bold">Claims Report</h1>
            </div>
        </header>
    );
}