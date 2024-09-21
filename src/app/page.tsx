import PageBuilder from '@/components/PageBuilder';
import Header from '@/components/Header';

export default async function Page() {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <Header />
        <PageBuilder />
      </div>
    </>
  );
}
