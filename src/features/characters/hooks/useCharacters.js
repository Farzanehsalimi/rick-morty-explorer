import { useEffect, useState, useCallback } from "react";
import { getAllCharacters } from "../api/characterApi";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const fetchCharacters = useCallback(async () => {
    setInitialLoading(true);
    setError(null);

    try {
      const data = await getAllCharacters();
      setCharacters(data);
    } catch (err) {
      setError(err);
    } finally {
      setInitialLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [fetchCharacters]);

  return {
    characters,
    initialLoading,
    loadMoreLoading,
    error,
    isOffline,
    fetchCharacters,
  };
};

export default useCharacters;
