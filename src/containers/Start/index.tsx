import { List, Modal, SpinLoading } from 'antd-mobile';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../request';
import styles from './style.module.scss';

interface IActivity {
  code: number;
  info: string;
  fanyi: string;
}

const Start = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState<IActivity>();
  const navigate = useNavigate();

  const goToAvatar = () => {
    navigate('/avatar');
  };

  const getTranslation = () => {
    setVisible(false);
    setLoading(true);
    axiosInstance
      .get('https://qcfb6a.api.cloudendpoint.cn/getActivity')
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setActivity({
            code: data.code,
            info: data.info,
            fanyi: data.fanyi,
          });
        }
      })
      .catch(() => {})
      .finally(() => {
        setVisible(true);
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className={styles.title}>随机挑战</h1>
      {/* @ts-ignore */}
      <List>
        <List.Item onClick={goToAvatar}>随机头像</List.Item>
        <List.Item onClick={getTranslation}>随机一件事</List.Item>
        <List.Item onClick={() => {}}>随机一句话</List.Item>

        <Modal
          visible={visible}
          content={
            <div>
              <h3>{activity?.info}</h3>
              <h4>{activity?.fanyi}</h4>
              <p>PS: 机器翻译，不一定准确</p>
            </div>
          }
          closeOnAction
          onClose={() => {
            setVisible(false);
          }}
          actions={[
            {
              key: 'confirm',
              text: '收到',
            },
          ]}
        />
      </List>

      {loading && (
        <div className={styles.loading}>
          <SpinLoading color='default' style={{ '--size': '48px' }} />
        </div>
      )}
    </>
  );
};

export default Start;
