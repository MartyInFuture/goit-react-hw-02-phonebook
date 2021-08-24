const Contacts = ({ contacts, onSearch, search, deleteItem }) => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <>
          <p>Find contacts by name</p>
          <input type="text" onChange={onSearch} />
        </>
      )}
      <ul>
        {contacts.map(({ id, name, phone }) => {
          if (!name.includes(search)) return false;
          return (
            <li key={id}>
              <p>
                {name}: {phone}
              </p>
              <button type="button" value={id} onClick={deleteItem}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
