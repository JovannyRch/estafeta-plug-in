import { useState, useEffect } from "react";

type ValidTypes = string | number | boolean | object | undefined;

const useLocalStorage = <T extends ValidTypes>(
  key: string,
  initialValue: T
) => {
  const readValue = (): T => {
    const item = window.localStorage.getItem(key);

    if (item === null) return initialValue;

    try {
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
