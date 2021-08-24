import ContactsList from './contactsList/ContactsList';
import { ContactsStyled } from './ContactsStyled';

const Contacts = ({ contacts, onSearch, search, deleteItem }) => {
  return (
    <ContactsStyled>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <>
          <h3>Find contacts by name</h3>
          <input className="search" type="text" onChange={onSearch} />
        </>
      )}
      <ContactsList
        contacts={contacts}
        search={search}
        deleteItem={deleteItem}
      />
    </ContactsStyled>
  );
};

export default Contacts;
