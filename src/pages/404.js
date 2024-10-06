import Link from 'next/link';
import styles from './404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a className={styles.homeLink}>Go back to the homepage</a>
      </Link>
    </div>
  );
}