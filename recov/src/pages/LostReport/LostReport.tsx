import { Header } from '../../components/Header.tsx';
import { ReportForm } from '../../components/ReportForm.tsx';
import { RecentItems } from '../../components/RecentItems.tsx';
import { Tips } from '../../components/Tips.tsx';

const recentItems = [
  { name: 'Wallet', description: 'Found at Main Street | 2 days ago' },
  { name: 'Phone', description: 'Found at Park | 3 days ago' },
  { name: 'Book', description: 'Found at Miyazaki Forest | 5 days ago' },
  // Add more items as needed
];

const tips = [
  {
    title: 'Check for ID',
    description:
      'Look for any identification in the item to help locate the owner.',
  },
  {
    title: 'Report to Local Authorities',
    description:
      'If the item is valuable or important, report it to the local authorities.',
  },
  {
    title: 'Ask nearby people',
    description:
      "See if the item belongs to them, if not then don't give it nigga",
  },
  // Add more tips as needed
];
export default function FoundReport() {
  return (
    <>
      <main className="flex flex-col bg-white  py-12 px-4 sm:px-6 lg:px-8">
        <Header
          title="Lost Something?"
          paragraph="Submit a report and we'll help you search."
          iconSize="h-28 w-28"
        />{' '}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ReportForm title="lost" />{' '}
          <div>
            <RecentItems items={recentItems} title="Recent Lost Items" />
            <Tips tips={tips} />
          </div>
        </div>
      </main>
    </>
  );
}
