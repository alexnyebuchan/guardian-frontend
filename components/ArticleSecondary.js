import styles from '@/styles/ArticleSecondary.module.scss';

import Link from 'next/link';

function ArticleSecondary({ article }) {
  return (
    <Link className={styles.articleTwo} href={article.webUrl}>
      <img src={article.fields.thumbnail} />
      <div>
        <h2>{article.tags[0].webTitle}</h2>
        <h3>{article.fields.headline}</h3>
      </div>
    </Link>
  );
}

export default ArticleSecondary;
