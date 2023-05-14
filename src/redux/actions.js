import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => ({
  payload: {
    ...data,
    id: nanoid(),
  },
}));

export const deleteContact = createAction('contacts/delete');

export const filterContact = createAction('contacts/changeFilter');
