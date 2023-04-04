import Image from 'next/image';
import { parse } from 'node-html-parser';

import styles from '@/styles/Body.module.scss';
import camera from '../public/images/camera.svg';
import Comments from './Comments';

function Body({ article }) {
  const root = parse(article.fields.body);
  console.log(article.fields.body);
  console.log(root);
  const bdyArr = root.childNodes.filter(
    (bdy) => bdy.constructor.name === 'HTMLElement'
  );

  return (
    <div className={styles.articleContainer}>
      <span>
        <h2>{article.tags[0].webTitle}</h2>

        <p>by {article.tags.slice(-1)[0].webTitle}</p>
      </span>
      <div>
        <div className={styles.article}>
          <h1>{article.fields.headline}</h1>
          <h2>{article.fields.trailText}</h2>
          <img src={article.fields.thumbnail} alt="" />
          <div className={styles.imageLabel}>
            <Image src={camera} alt="/" />
            <text className={styles.imgTag}>
              {
                article.fields.main
                  .split('image__caption">')[1]
                  .split('</span>')[0]
              }
            </text>
          </div>
          <div className={styles.body}>
            {bdyArr[0].childNodes[0]._rawText === ' \n ' ? (
              <>
                <p>
                  Apologies there is a paywall for this article. Please go to
                  the Guardian main website to see in full{' '}
                  <a href={article.webUrl}>here.</a>
                </p>
              </>
            ) : (
              bdyArr.map((b) => <p>{b.childNodes[0]._rawText}</p>)
            )}
          </div>
        </div>
      </div>
      <span className={styles.comments}>
        <Comments id={article.id} />
      </span>
    </div>
  );
}

export default Body;
