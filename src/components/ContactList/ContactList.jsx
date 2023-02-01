import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { deleteContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactItem = ({ idx, name, number, onRemove }) => {
  return (
    <li className={css.contactListItem}>
      <p>
        {name}: {number}
        <button
        type="button"
        className={css.deleteBtn}
        onClick={() => {
          onRemove(idx);
        }}
      >
        Remove
      </button>
      </p>
    </li>
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, phone }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          idx={id}
          onRemove={() => {
            dispatch(deleteContacts(id));
          }}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array,
  onRemove: propTypes.func,
};

ContactItem.propTypes = {
  idx: propTypes.string,
  name: propTypes.string,
  number: propTypes.string,
  onRemove: propTypes.func,
};
