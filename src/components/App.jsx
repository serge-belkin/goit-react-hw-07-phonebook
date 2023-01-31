// import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div 
     style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',

          alignItems: 'center',
          fontSize: 20,
          color: '#778DA9',
      }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

