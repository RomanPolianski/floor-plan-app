import { FC } from 'react';
import styles from '../../../common/table/Table.module.scss';

interface PeopleRowProps {
  name: string;
  midname: string;
  surname: string;
  imgRef: string;
}
const PeopleRow: FC<PeopleRowProps> = ({
  name,
  midname,
  surname,
  imgRef,
}): JSX.Element => {
  return (
    <tr className={styles.table__row}>
      <td data-label="Avatar" className={styles.table__data}>
        <img alt="avatar" src={imgRef} className={styles.table__avatar} />
      </td>
      <td data-label="Name" className={styles.table__data}>
        {name}
      </td>
      <td data-label="Midname" className={styles.table__data}>
        {midname}
      </td>
      <td data-label="Surname" className={styles.table__data}>
        {surname}
      </td>
    </tr>
  );
};

export default PeopleRow;
