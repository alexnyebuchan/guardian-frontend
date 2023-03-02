import styles from '@/styles/ArticleMain.module.scss';

import Link from 'next/link';

function ArticleMain({ article }) {
  return (
    <Link className={styles.articleOne} href={article.webUrl}>
      <text>
        <h2>{article.tags[0].webTitle}</h2>
        <h3>{article.fields.headline}</h3>
        <p>{article.fields.trailText}</p>
      </text>
      <div>
        <img src={article.fields.thumbnail} />
      </div>
    </Link>
  );
}

export default ArticleMain;
