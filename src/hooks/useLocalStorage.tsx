import { useEffect, useState } from "react";
import { IListElement } from "../components/types";

const useLocalStorage = <T,>(key: string, initialValue: T) => {

  const [value, setValue] = useState(()=>{
    try{
    const localValue = localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initialValue;      
    } catch (err) {
      console.log(err);
      return initialValue;
    }

  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage;