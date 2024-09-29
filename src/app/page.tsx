import PageBuilder from '@/components/PageBuilder';
import Header from '@/components/section/Header';
import Footer from '@/components/section/Footer';

export default async function Page() {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <Header />
        <PageBuilder />
        <Footer />
      </div>
    </>
  );
}
