import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = event => dispatch(filterContact(event.target.value));

  return (
    <label>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        onChange={onFilter}
        className={s.search}
      />
    </label>
  );
};

export default Filter;
