import styles from '@/styles/ArticleSub.module.scss';
import Link from 'next/link';

function ArticleSub({ article }) {
  return (
    <Link href={article.webUrl} className={styles.subContainer}>
      <img src={article.fields.thumbnail} />
      <div>
        <h2>{article.tags[0].webTitle}</h2>
        <h3>{article.fields.headline}</h3>
      </div>
    </Link>
  );
}

export default ArticleSub;
