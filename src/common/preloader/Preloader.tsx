import { FC } from 'react';
import PreloaderIcon from '../../assets/preloader.svg';

const Preloader: FC = (): JSX.Element => {
  return (
    <img
      src={PreloaderIcon}
      style={{ width: 105, height: 105 }}
      alt="loading ico"
    />
  );
};

export default Preloader;
