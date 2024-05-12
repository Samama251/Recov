import { Header } from '../../components/Header.tsx';
import { AccountDetails } from './components/AccountDetails.tsx';
import { SubmissionsList } from './components/SubmissionList.tsx';
export default function MyAccount() {
  const submissions = [
    { title: 'Lost Wallet', date: '2023-04-15', status: 'Lost' },
    { title: 'Found Keys', date: '2023-03-22', status: 'Found' },
    { title: 'Lost Sunglasses', date: '2023-02-10', status: 'Lost' },
  ];

  return (
    <main className="container mx-auto py-12 px-12 md:px-6">
      <div className="space-y-8">
        <div className="space-y-4">
          <Header title="My Account" paragraph="" iconSize="h-28 w-28" />{' '}
          <AccountDetails />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl my-2 font-semibold">My Submissions</h2>
            <SubmissionsList submissions={submissions} />
          </div>
        </div>
      </div>
    </main>
  );
}
