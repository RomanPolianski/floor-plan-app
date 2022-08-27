import { FC, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface ButtonPropsType {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonPropsType> = ({ text, onClick }): JSX.Element => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
