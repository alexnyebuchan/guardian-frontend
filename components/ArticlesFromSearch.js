import { useState, useEffect } from 'react';

import styles from '@/styles/ArticlesFromSearch.module.scss';
import Loader from './Loader';
import ArticleSearch from './ArticleSearch';

function ArticlesFromSearch({ searchValue }) {
  const [articles, setArticles] = useState();

  const api_key = 'ab58c47a-b9d3-4df4-874a-78cd2d7f5a88';

  useEffect(() => {
    deBounce(fetchData, 500);
  }, [searchValue]);

  function deBounce(func, delay) {
    console.log('debounce');
    let timer;
    return (...args) => {
      if (timer) {
        console.log('if');
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        console.log('timer');
        func.apply(this, args);
      }, delay);
    };
  }

  async function fetchData() {
    const res = await fetch(
      `https://content.guardianapis.com/search?query-fields=headline,trailtext,body&q=${searchValue}&section=technology&page-size=24&orderBy=relevance&show-fields=headline,trailText,thumbnail&show-tags=keyword&api-key=${api_key}`
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
