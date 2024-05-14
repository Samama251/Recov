import {
  PackageIcon,
  FileTextIcon,
} from "../../../public/itemIcons/itemIcons.tsx";

// Import the components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { InfoCard } from "./components/InfoCard";
import { StatisticCard } from "./components/StatisticCard.tsx";

export default function AdminDashboard() {
  return (
    <div className="flex h-auto w-full flex-col lg:overflow-hidden overflow-y-auto">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="grid gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <InfoCard
                title="Total Lost Items"
                icon={
                  <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                }
              >
                <div className="text-3xl font-bold pb-3">1,234</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +5.2% from last month
                </p>
              </InfoCard>
              <InfoCard
                title="Total Found Items"
                icon={
                  <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                }
              >
                <div className="text-3xl font-bold pb-3">987</div>
                <p className="text-sm text-gray-500  dark:text-gray-400">
                  +3.8% from last month
                </p>
              </InfoCard>
              <InfoCard
                title="Pending Reports"
                icon={
                  <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                }
              >
                <div className="text-3xl font-bold  pb-3">42</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +2 since last week
                </p>
              </InfoCard>
              <InfoCard
                title="Resolved Reports"
                icon={
                  <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                }
              >
                <div className="text-3xl font-bold  pb-3">128</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +15 since last week
                </p>
              </InfoCard>
            </div>
            <div className="grid gap-8">
              <StatisticCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
