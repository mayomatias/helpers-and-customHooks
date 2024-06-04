import { useState } from "react";

export default function useCounter(initialValue = 10) {

    const [ counter, setCounter ] = useState( initialValue )

    const addCounter = () => {
        setCounter(counter + 1);
    }
    const susCounter = () => {
        setCounter(counter - 1);
    }
    const resetCounter = () => {
        setCounter(initialValue);
    }

  return {
    counter,
    addCounter,
    susCounter,
    resetCounter
  }
}
