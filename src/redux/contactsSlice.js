import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, removeContact } from './operations';

const handlePending = (state) => {
state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },


  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addNewContact.pending]: handlePending,
    [removeContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addNewContact.rejected]: handleRejected,
    [removeContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [addNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },  
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
