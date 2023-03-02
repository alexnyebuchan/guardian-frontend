import { useState, useRef } from 'react';

import ArticlesDefault from '@/components/ArticlesDefault';
import ArticlesFromSearch from '@/components/ArticlesFromSearch';

import styles from '@/styles/Main.module.scss';

function Main() {
  const input = useRef();
  const [searchValue, setSearchValue] = useState('');

  function setInput() {
    setSearchValue(input.current.value);
  }

  return (
    <div className={styles.main}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <span className={styles.search}>
          <text>Search:</text>
          <input type="text" onChange={setInput} ref={input} />
        </span>
      </div>

      {/* Articles */}
      {searchValue ? (
        <ArticlesFromSearch searchValue={searchValue} />
      ) : (
        <ArticlesDefault />
      )}
    </div>
  );
}

export default Main;
