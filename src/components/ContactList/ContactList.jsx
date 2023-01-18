import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import {deleteContact} from '../../redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { removeContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  const handleRemove = id => dispatch(removeContact(id));

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
            <button className={css.button} onClick={() => handleRemove(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
