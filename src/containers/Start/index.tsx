import { List } from 'antd-mobile';
import { useNavigate } from 'react-router';

const Start = () => {
  const navigate = useNavigate();

  const goToAvatar = () => {
    navigate('/avatar');
  };

  return (
    <div>
      {/* @ts-ignore */}
      <List header='可点击的功能列表'>
        <List.Item onClick={goToAvatar}>随机头像</List.Item>
        <List.Item onClick={() => {}}>随机一件事</List.Item>
        <List.Item onClick={() => {}}>随机网易云</List.Item>
      </List>
    </div>
  );
};

export default Start;
