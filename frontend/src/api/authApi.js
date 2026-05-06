import { request } from './client';

export const loginUser = ({ email, password }) =>
  request('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const registerUser = ({ email, password }) =>
  request('/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
