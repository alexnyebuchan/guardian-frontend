import { useState, useEffect } from 'react';

import styles from '@/styles/ArticlesFromSearch.module.scss';
import Loader from './Loader';
import ArticleSearch from './ArticleSearch';

function ArticlesFromSearch({ searchValue }) {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  async function fetchData() {
    const res = await fetch(
      `https://content.guardianapis.com/search?query-fields=headline,trailtext,body&q=${searchValue}&section=technology&page-size=24&orderBy=relevance&show-fields=headline,trailText,thumbnail&show-tags=keyword&api-key=${process.env.NEXT_PUBLIC_APIKEY}`
    );
    const json = await res.json();
    setArticles(json.response.results);
  }

  return (
    <>
      {articles ? (
        <div className={styles.articlesContainer}>
          <h2>Search Results for '{searchValue}'':</h2>
          <div className={styles.articles}>
            {articles.map((article) => (
              <ArticleSearch article={article} />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ArticlesFromSearch;
