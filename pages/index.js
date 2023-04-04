import Header from '@/components/Header';
import Main from '@/components/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guardian Technology</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </>
  );
}
