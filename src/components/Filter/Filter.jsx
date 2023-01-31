import propTypes from "prop-types";
import css from './Filter.module.css';
import { setStatusFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const handleFilter = e => {
    dispatch(setStatusFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <>
      <label className={css.filterTitle}>
        Find contacts by Name
        <input
          className={css.filterName}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  onChange: propTypes.func,
  value: propTypes.string,
};
