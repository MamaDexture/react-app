
import { useState } from "react";

function Osama() {

  
let [counter,setCounter] =useState(15);
const addCounter = () => {
  if(counter < 30 ){
    setCounter(counter+1)
  }
  
  }
  const subtractCounter = () => {
    if(counter >= 1 ){
      setCounter(counter-1)
    }
    
  }
    return (
      <>
      <h1 className="text-red-700">Osama Zafar</h1>
      <h1>Counuter : {counter}</h1>
      <button onClick={addCounter}>Add Counter </button>
      <button onClick={subtractCounter}>Subtract Counter </button>
      </>
    );
  }
  
  export default Osama;