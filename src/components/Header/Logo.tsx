import { FC } from 'react';
import styles from './Header.module.scss';

const Logo: FC = (): JSX.Element => {
  return <h1 className={styles.header__title}>FLOOR PLAN</h1>;
};

export default Logo;
