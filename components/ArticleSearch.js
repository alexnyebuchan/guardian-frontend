import styles from '@/styles/ArticleSearch.module.scss';
import Link from 'next/link';

function ArticleSearch({ article }) {
  const id = article.id.split('/').slice(-1)[0];

  return (
    <>
      <Link href={`/${id}`} className={styles.Container}>
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
