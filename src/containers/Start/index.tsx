import { List } from 'antd-mobile';
import { useNavigate } from 'react-router';

const Start = () => {
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate('/article');
  };

  return (
    <div>
      {/* @ts-ignore */}
      <List header='可点击的功能列表'>
        <List.Item onClick={() => {}}>随机情话</List.Item>
        <List.Item onClick={goToArticle}>每日一文</List.Item>
        <List.Item onClick={() => {}}>设置</List.Item>
      </List>
    </div>
  );
};

export default Start;
