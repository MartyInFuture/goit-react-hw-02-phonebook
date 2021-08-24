import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    inputId: uuidv4(),
    phoneInputId: uuidv4(),
    search: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, id: uuidv4(), phone: this.state.phone },
      ],
    });
    e.target.reset();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  deleteItem = (e) => {
    const index = this.state.contacts.indexOf(
      this.state.contacts.find((item) => item.id === e.target.value)
    );
    this.setState((prev) => {
      prev.contacts.splice(index, 1);
      return {
        contacts: [...prev.contacts],
      };
    });
  };

  onSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.state.inputId}>Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id={this.state.inputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label htmlFor={this.state.phoneInputId}>Phone</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="phone"
            id={this.state.phoneInputId}
            required
          />
          <button type="submit">Add contact</button>
        </form>

        <Contacts
          contacts={this.state.contacts}
          onSearch={this.onSearch}
          search={this.state.search}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
