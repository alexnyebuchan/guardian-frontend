import Header from '@/components/Header';
import Main from '@/components/Main';
import Head from 'next/head';

import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState();

  const api_key = 'ab58c47a-b9d3-4df4-874a-78cd2d7f5a88';

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://content.guardianapis.com/search?section=technology&page-size=12&order-date=published&show-fields=headline,trailText,thumbnail&show-tags=keyword&api-key=${api_key}`
      );
      const json = await res.json();

      const sortedJson = json.response.results;
      setArticles(sortedJson);
      console.log(articles);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
