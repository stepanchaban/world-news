import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { BannersList } from '@/widgets/news';
import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
