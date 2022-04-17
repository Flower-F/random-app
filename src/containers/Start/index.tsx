import { List } from 'antd-mobile';
import { useNavigate } from 'react-router';

const Start = () => {
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate('/article');
  };

  const goToAvatar = () => {
    navigate('/avatar');
  };

  return (
    <div>
      {/* @ts-ignore */}
      <List header='可点击的功能列表'>
        <List.Item onClick={goToAvatar}>随机头像</List.Item>
        <List.Item onClick={() => {}}>随机图片</List.Item>
        <List.Item onClick={() => {}}>随机一句话</List.Item>
        <List.Item onClick={goToArticle}>每日一文</List.Item>
        <List.Item onClick={() => {}}>历史上的今天</List.Item>
      </List>
    </div>
  );
};

export default Start;
