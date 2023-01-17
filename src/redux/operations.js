import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://63c64fffd307b76967368740.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await axios.get(`/contacts`);
        return response.data;
      
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
});

export const addNewContact = createAsyncThunk('contacts/addContact',
async (user, thunkAPI) => {
    try {
       const response = await axios.post(`/contacts`, user);
       return response.data; 
       
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const removeContact = createAsyncThunk('contacts/removeContact', 
async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`contacts/${id}`);
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})