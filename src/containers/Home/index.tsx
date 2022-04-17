import { useEffect, useState } from 'react';
import { Button } from 'antd-mobile';
import axios from 'axios';
import styles from './style.module.scss';

const Home = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://qcfb6a.api.cloudendpoint.cn/getSweet')
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setContent(data.sweet);
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.home}>
      <span className={styles.content}>{content}</span>
      <img
        className={styles.image}
        src='https://api.oick.cn/random/api.php?type=pe'
      />
      <Button className={styles.button} onClick={reload}>
        换一个
      </Button>
    </div>
  );
};

export default Home;
