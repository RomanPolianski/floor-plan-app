import Map from './components/Content/Map/Map';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h1>People</h1>
        </div>
        <div className={styles.contentRight}>
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
