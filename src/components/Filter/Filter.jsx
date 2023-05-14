import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={showFilteredContacts}
          className={styles.search}
        />
      </label>
    </div>
  );
};
