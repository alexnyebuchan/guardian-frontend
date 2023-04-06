import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Header.module.scss';

import GuardianLogo from '../public/images/guardianLogo.svg';
import supportArrow from '../public/images/supportArrow.svg';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <span className={styles.supportContainer}>
          <h2>Support the Guardian</h2>
          <div>Available for everyone, funded by readers</div>
          <a href="https://support.theguardian.com/uk/contribute?REFPVID=lepqetjdam0wn2rpvb8t&INTCMP=header_support_2023-02-09_HEADER_TEST_R1_CONTROL&acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentId%22%3A%22header_support_2023-02-09_HEADER_TEST_R1_CONTROL%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22campaignCode%22%3A%22header_support_2023-02-09_HEADER_TEST_R1_CONTROL%22%2C%22abTests%22%3A%5B%7B%22name%22%3A%222023-02-09_HEADER_TEST_R1%22%2C%22variant%22%3A%22CONTROL%22%7D%5D%2C%22referrerPageviewId%22%3A%22lepqetjdam0wn2rpvb8t%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Fuk%2Ftechnology%22%2C%22isRemote%22%3Atrue%7D&numArticles=0">
            Support Us <Image alt="/" src={supportArrow} />
          </a>
        </span>
        <span className={styles.logoContainer}>
          <Link href="/">
            <Image alt="/" src={GuardianLogo} />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
