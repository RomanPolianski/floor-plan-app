import { FC } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';

const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Logo />
      </div>
    </header>
  );
};
export default Header;
