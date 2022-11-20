import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newUser = { id: nanoid(), name, number };

    setContacts();
    const array = contacts.map(contact => contact);
    const newContact = { ...contacts, id: nanoid(), name, number };

    !array.includes(contacts)
      ? this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }))
      : alert(`${contacts} is already in contacts.`);
  };

  const filterHandler = e => {
    setFilter(e.еarget.value);
  };
  const filteredNames = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={filterHandler} value={filter} />
      <Contacts contacts={filteredNames()} deleteContact={deleteContact} />
    </div>
  );
};
