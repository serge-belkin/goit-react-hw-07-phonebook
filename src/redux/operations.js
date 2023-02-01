import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63d9f71c2af48a60a7c2c17d.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts', async () => {
    const { data } = await axios.get('/contacts');
    return data;
});

export const addContacts = createAsyncThunk('contacts/addContacts', async ({ name, phone}) => {
    const { data } = await axios.post('/contacts', { name, phone});
    return data;
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
});
