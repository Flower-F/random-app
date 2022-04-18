import { useState } from 'react';
import { Button, Switch, Avatar, Card, SpinLoading } from 'antd-mobile';
import { axiosInstance } from '../../request';
import styles from './style.module.scss';

const AvatarPage = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [checked, setChecked] = useState(true);

  const getAvatar = () => {
    setLoading(true);
    axiosInstance
      .get(
        `https://qcfb6a.api.cloudendpoint.cn/getAvatar?sex=${
          checked ? '男' : '女'
        }`
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          const data = res.data;
          setUrl(data.avatar);
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.avatar}>
      {/* @ts-ignore */}
      <Card title={<h3 className={styles.title}>随机头像</h3>}>
        <Avatar src={url} className={styles.image} />
        <div className={styles.select}>
          <Switch
            uncheckedText='女'
            checkedText='男'
            defaultChecked
            onChange={setChecked}
          />
          <Button color='primary' style={{ marginLeft: 8 }} onClick={getAvatar}>
            获取新头像
          </Button>
        </div>
      </Card>
      {loading && (
        <div className={styles.loading}>
          <SpinLoading color='default' style={{ '--size': '48px' }} />
        </div>
      )}
    </div>
  );
};

export default AvatarPage;
