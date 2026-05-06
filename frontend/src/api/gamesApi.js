import { request } from './client';

export const fetchGames = () => request('/juegos');
