import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filterData, setFilterData] = useState('');

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const formSubmitHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const addedContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    addedContact
      ? alert(`${name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const filterHandler = e => {
    setFilterData(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterData.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={filterHandler} value={filterData} />
      <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
