import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] =  useState('');
  const [displayInput, setDisplayInput] = useState(false);
  

  const handleChange = (e) => {
    if(displayInput) {
      setDisplayInput(false);
    }
    setInputValue(e.target.value);
  };


  return (
    <div>
      <h3>{displayInput ? "You wrote: " + inputValue : <></>}</h3>
      <input value={inputValue} onChange={(e) => handleChange(e)} />
      <button onClick={() => setDisplayInput(true)}>click me</button>
    </div>
  );
};

export default TextInput;