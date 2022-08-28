import { FC } from 'react';
import Map from './components/Content/Map/Map';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { People } from './components/Content/People/People';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <People />
        </div>
        <div className={styles.contentRight}>
          <Map />
        </div>
      </div>
    </>
  );
};

export default App;
