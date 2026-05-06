import { request } from './client';

export const createPurchase = ({ usuario, carrito }) =>
  request('/comprar', {
    method: 'POST',
    body: JSON.stringify({ usuario, carrito }),
  });

export const fetchPurchases = (email) =>
  request(`/compras?email=${encodeURIComponent(email)}`);
