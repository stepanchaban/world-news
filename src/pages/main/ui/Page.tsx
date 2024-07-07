import LatestNews from './LatestNews/LatestNews';
import styles from './styles.module.css';

import NewsByFilters from '@/pages/main/ui/NewsByFilters/NewsByFilters';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
