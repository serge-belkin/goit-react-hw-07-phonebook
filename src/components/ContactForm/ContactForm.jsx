import { useState } from 'react';
import { addContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.items);

 const dispatch = useDispatch();
  const handleChange = e => {
    const { name: inputName, value } = e.currentTarget;
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'number') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const names = contacts.map(contact => contact.name);
    if (names.indexOf(name) >= 0) {
      alert(name + ' is already in contacts');
      return;
    }
    dispatch(addContacts({ name, phone, id: nanoid() }));
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formTitle}>Name </label>
      <input
        className={css.contactName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <label className={css.formTitle}>Number </label>
      <input
        className={css.contactNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChange}
      />
      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func,
};
