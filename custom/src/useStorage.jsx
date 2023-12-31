import { useState, useEffect } from "react";

function retrieve(key, initialValue, storage) {
  const value = JSON.parse(storage.getItem(key));
  if (value) return value;

  if (initialValue instanceof Function) return initialValue();
  
  return initialValue;
}

export default function useStorage(key, initialValue, storage = localStorage) {
  const [value, setValue] = useState(() => {
    return retrieve(key, initialValue, storage);
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [value, key, storage]);

  return [value, setValue];
}