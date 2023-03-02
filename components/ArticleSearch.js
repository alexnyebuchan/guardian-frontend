import styles from '@/styles/ArticleSearch.module.scss';
import Link from 'next/link';

function ArticleSearch({ article }) {
  return (
    <>
      <Link href={article.webUrl} className={styles.Container}>
        <img src={article.fields.thumbnail} />
        <div>
          <h2>{article.tags[0].webTitle}</h2>
          <h3>{article.fields.headline}</h3>
        </div>
      </Link>
    </>
  );
}

export default ArticleSearch;
