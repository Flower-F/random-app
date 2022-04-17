import { Skeleton } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../request';
import styles from './style.module.scss';

interface Article {
  title: string;
  subtitle: string;
  content: string;
}

const Article = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('https://qcfb6a.api.cloudendpoint.cn/getArticle')
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          const data = res.data;
          setArticle({
            title: data.title,
            content: data.content,
            subtitle: data.subtitle,
          });
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={12} animated />
      </div>
    );
  }

  return (
    <div className={styles.article}>
      <div className={styles.title}>{article?.title}</div>
      <div className={styles.subtitle}>{article?.subtitle}</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: article?.content || '' }}
      ></div>
    </div>
  );
};

export default Article;
