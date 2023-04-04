import Body from '@/components/Body';
import Header from '@/components/Header';
import Head from 'next/head';
import BackBar from '@/components/BackBar';

function ArticlePage({ article }) {
  console.log(article);

  return (
    <>
      <Head>
        <title>Guardian Technology</title>
      </Head>

      <Header />
      <BackBar />
      <Body article={article} />
    </>
  );
}

// headline,trailText,thumbnail,body

export async function getServerSideProps({ query: { id } }) {
  console.log(id);
  const res = await fetch(
    `https://content.guardianapis.com/search?q=${id}&page-size=1&show-references=all&show-fields=all&show-tags=contributor,keyword&api-key=${process.env.NEXT_PUBLIC_APIKEY}`
  );
  const arts = await res.json();
  const articles = arts.response.results;

  return {
    props: {
      article: articles[0],
    },
  };
}

export default ArticlePage;
