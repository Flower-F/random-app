import { List, Modal, Result, SpinLoading } from 'antd-mobile';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import CardItem from '../../components/CardItem';
import { axiosInstance } from '../../request';
import styles from './style.module.scss';

interface IActivity {
  code: number;
  info: string;
  fanyi: string;
}

const Start = () => {
  const [thingVisible, setThingVisible] = useState(false);
  const [sentenceVisible, setSentenceVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState<IActivity>();
  const [sentence, setSentence] = useState('');
  const navigate = useNavigate();

  const goToAvatar = () => {
    navigate('/avatar');
  };

  const getThing = () => {
    setThingVisible(false);
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
        setThingVisible(true);
        setLoading(false);
      });
  };

  const getSentence = () => {
    setSentenceVisible(false);
    setLoading(true);
    axiosInstance
      .get('https://qcfb6a.api.cloudendpoint.cn/getSentence')
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setSentence(data.sentence);
        }
      })
      .catch(() => {})
      .finally(() => {
        setSentenceVisible(true);
        setLoading(false);
      });
  };

  return (
    <div className={styles.start}>
      <h3 className={styles.title}>随机挑战</h3>
      {/* @ts-ignore */}
      <div className={styles.card}>
        <CardItem title='随机头像' color='#667eea' onClick={goToAvatar} />
        <CardItem title='随机一件事' color='#3f5efb' onClick={getThing} />
        <CardItem title='随机一句话' color='#8334d2' onClick={getSentence} />

        <Modal
          visible={thingVisible}
          content={
            <div>
              <Result
                status='info'
                title={
                  <>
                    <p style={{ fontWeight: 600, fontSize: '1.2rem' }}>
                      {activity?.info}
                    </p>
                    <p style={{ fontSize: '1rem' }}>{activity?.fanyi}</p>
                  </>
                }
                description='机器翻译，准确度较低，请谅解'
              />
            </div>
          }
          closeOnAction
          onClose={() => {
            setThingVisible(false);
          }}
          actions={[
            {
              key: 'confirm',
              text: '好的',
            },
          ]}
        />

        <Modal
          visible={sentenceVisible}
          content={<Result status='info' title={sentence} />}
          closeOnAction
          onClose={() => {
            setSentenceVisible(false);
          }}
          actions={[
            {
              key: 'confirm',
              text: '好的',
            },
          ]}
        />
      </div>

      {loading && (
        <div className={styles.loading}>
          <SpinLoading color='default' style={{ '--size': '48px' }} />
        </div>
      )}
    </div>
  );
};

export default Start;
