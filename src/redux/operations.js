import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://63d9f71c2af48a60a7c2c17d.mockapi.io/contacts'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (newItem, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://63d9f71c2af48a60a7c2c17d.mockapi.io/contacts',
        newItem
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://63d9f71c2af48a60a7c2c17d.mockapi.io/contacts`,
        {
          params: { id },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
