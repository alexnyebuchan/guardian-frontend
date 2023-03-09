import Header from '@/components/Header';
import Main from '@/components/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guardian Technology</title>
      </Head>
      <Header />
      <Main />
    </>
  );
}
