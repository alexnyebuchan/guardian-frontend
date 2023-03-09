import Image from 'next/image';

import styles from '@/styles/Body.module.scss';
import camera from '../public/images/camera.svg';

function Body({ article }) {
  console.log();

  return (
    <div className={styles.articleContainer}>
      <span>
        <h2>{article.tags[0].webTitle}</h2>
        <p>{article.tags.slice(-1)[0].webTitle}</p>
      </span>
      <div>
        <div className={styles.article}>
          <h1>{article.fields.headline}</h1>
          <h2>{article.fields.trailText}</h2>
          <img id="image" src={article.fields.thumbnail} alt="" />
          <div className={styles.imageLabel}>
            <Image src={camera} alt="/" />
            <label htmlFor="image">
              {
                article.fields.main
                  .split('image__caption">')[1]
                  .split('</span>')[0]
              }
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
