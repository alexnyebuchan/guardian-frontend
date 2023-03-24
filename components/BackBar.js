import styles from '@/styles/BackBar.module.scss';
import Link from 'next/link';

function BackBar() {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.search}>
        <Link href="/">
          <p>Go Back</p>
        </Link>
      </span>
    </div>
  );
}

export default BackBar;
