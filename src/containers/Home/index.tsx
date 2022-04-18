import { useEffect, useState } from 'react';
import { Button, SpinLoading } from 'antd-mobile';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../request';
import styles from './style.module.scss';

const Home = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axiosInstance
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

  const goToMain = () => {
    navigate('/start');
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <SpinLoading color='default' />
      </div>
    );
  }

  return (
    <div className={styles.home}>
      <span className={styles.content}>{content}</span>
      <img
        className={styles.image}
        src='https://api.oick.cn/random/api.php?type=pe'
      />

      <div className={styles.button}>
        <Button onClick={reload}>再换一张</Button>
        <Button onClick={goToMain} style={{ marginLeft: 10 }}>
          随机开始
        </Button>
      </div>
    </div>
  );
};

export default Home;
