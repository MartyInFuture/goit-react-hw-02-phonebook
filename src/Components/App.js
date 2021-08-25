import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './phonebook/Phonebook';
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
    if (this.state.contacts.find((item) => item.name === this.state.name)) {
      alert('User alredy exist!');
      return false;
    }

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
        <Phonebook
          handleSubmit={this.handleSubmit}
          inputId={this.state.inputId}
          handleChange={this.handleChange}
          phoneInputId={this.state.phoneInputId}
        />
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