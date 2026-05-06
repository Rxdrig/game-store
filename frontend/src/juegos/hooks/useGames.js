import { useEffect, useState } from 'react';
import { fetchGames } from '../../api/gamesApi';

let gamesCache = null;

export const useGames = () => {
  const [games, setGames] = useState(gamesCache || []);
  const [loading, setLoading] = useState(!gamesCache);
  const [error, setError] = useState('');

  useEffect(() => {
    if (gamesCache) {
      return;
    }

    let isMounted = true;

    const loadGames = async () => {
      try {
        setLoading(true);
        const data = await fetchGames();

        if (!isMounted) return;

        gamesCache = data;
        setGames(data);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || 'No se pudieron cargar los juegos');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadGames();

    return () => {
      isMounted = false;
    };
  }, []);

  return { games, loading, error };
};
