import { useEffect, useState } from 'react';

import styles from '@/styles/ArticlesDefault.module.scss';
import ArticleSub from './ArticleSub';
import ArticleMain from './ArticleMain';
import ArticleSecondary from './ArticleSecondary';
import Loader from './Loader';

function ArticlesDefault() {
  const [articles, setArticles] = useState();

  const api_key = 'ab58c47a-b9d3-4df4-874a-78cd2d7f5a88';

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://content.guardianapis.com/search?section=technology&page-size=12&order-date=published&show-fields=headline,trailText,thumbnail&show-tags=keyword&api-key=${api_key}`
      );
      const json = await res.json();

      setArticles(json.response.results);
    }
    fetchData();
  }, []);

  return (
    <>
      {articles ? (
        <div className={styles.articlesContainer}>
          <h2>Technology</h2>
          <div className={styles.articles}>
            <div className={styles.articleMainContainer}>
              <ArticleMain article={articles[0]} />

              <ArticleSecondary article={articles[1]} />
            </div>
            <div className={styles.articleSecondaryContainer}>
              {articles.slice(2, -6).map((article) => (
                <span>
                  <ArticleSub article={article} />
                </span>
              ))}
            </div>
            <div className={styles.articleSubContainer}>
              <button>+ More Technology</button>
              <span>Article 7,8,9,10,11,12</span>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ArticlesDefault;
