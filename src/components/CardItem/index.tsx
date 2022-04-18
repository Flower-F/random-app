import { FC } from 'react';
import styles from './style.module.scss';

interface ICardItemProps {
  color: string;
  title: string;
}

const CardItem: FC<ICardItemProps & React.HTMLAttributes<HTMLDivElement>> = ({
  color,
  title,
  ...restProps
}) => {
  return (
    <div
      className={styles.item}
      style={{ backgroundColor: color }}
      {...restProps}
    >
      {title}
    </div>
  );
};

export default CardItem;
