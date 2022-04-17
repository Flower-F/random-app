import { LeftOutline, MoreOutline } from 'antd-mobile-icons';
import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <span>
        <LeftOutline />
      </span>
      <span>详情</span>
      <span>
        <MoreOutline />
      </span>
    </div>
  );
};

export default Header;
