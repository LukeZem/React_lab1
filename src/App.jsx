import { useState } from "react";
import "./App.css";
import TextInput from "./components/textInput";
import ItemList from "./components/ItemList";

const funnyQuotes = [
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "I'm not lazy, I'm just on my energy-saving mode.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to play piano by ear, but now I use my hands.",
  "Why do Java developers wear glasses? Because they don't see sharp.",
  "Why do programmers prefer iOS development over Android development? Because it's a piece of cake!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to be a baker, but I couldn't make enough dough.",
];


function App() {
  return (
    <>
      <h1>React Lab 1</h1>
      <div>
        <h2># 4</h2>
        <TextInput />
      </div>
      <div>
        <h2># 5</h2>
        <ItemList quotes={funnyQuotes} /> 
      </div>
    </>
  );
}

export default App;
