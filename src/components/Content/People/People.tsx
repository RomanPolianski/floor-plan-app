import { FC, useEffect, useState } from 'react';
import instance from '../../../axios/api';
import { Table } from '../../../common/table/Table';
import Pagination from './Pagination/Pagination';
import PeopleRow from './PeopleRow';
import styles from './People.module.scss';

interface PeopleType {
  name: string;
  midname: string;
  surname: string;
  imgRef: string;
}

export const People: FC = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleType[]>([]);
  const [peopleTotal, setPeopleTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [peoplePerPage] = useState<number>(3);
  const offset = currentPage * 3 - 3;

  useEffect(() => {
    async function fetchPeopleTotal() {
      const resp = await instance.get('/contacts/amount');
      setPeopleTotal(resp.data.amount);
    }
    fetchPeopleTotal();
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(peopleTotal / peoplePerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchPeople() {
      setIsFetching(true);
      const resp = await instance.get(
        `/contacts/?page=${currentPage}&limit=${peoplePerPage}`
      );
      setPeople(resp.data);
      setIsFetching(false);
    }
    fetchPeople();
  }, [offset]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const peopleRow = people.map((p) => (
    <PeopleRow
      name={p.name}
      midname={p.midname}
      surname={p.surname}
      imgRef={p.imgRef}
      key={p.imgRef}
    />
  ));
  return (
    <div>
      <h2 className={styles.header}>People.</h2>
      <Table
        headers={['', 'Name', 'Midname', 'Surname']}
        data={peopleRow}
        showBody={!isFetching}
      />
      <div className={styles.table__buttonContainer}>
        <Pagination
          paginate={paginate}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
