import { useState } from "react";
import "./App.css";
import Confetti from 'react-confetti';

let randomNumber = Math.floor(Math.random() * 10)+1;
let counter = 0;

function App() {
  const [guessList, setGuessList] = useState([]);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const guessTheNum = (e) => {
    e.preventDefault();
    const output = document.getElementById("output");
    let guess = e.target[0].value;
    guess = parseInt(guess);
    console.log(guess)

    if (guess < randomNumber) {
      output.innerText = "Too Low";
      setGuessList([...guessList, guess]);
      counter+=1
    } else if (guess > randomNumber) {
      output.innerText = "Too High";
      setGuessList([...guessList, guess]);
      counter +=1
    }else if(guess<1 || guess > 10 || isNaN(guess)){
      output.innerText= "guess out of range"
    } 
    else {
      output.innerText = `WINNER WINNER in ${counter +1} guesses`;
      setIsConfettiActive(true)
    }
  };
  return (
    <>
      <img
        id="quest"
        className="logo"
        src="/src/questions.svg"
        alt="Logo"
      ></img>
      <h1>Guess the Number Game</h1>
      <h2>Attempts:  {counter}</h2>
      <form onSubmit={(e) => guessTheNum(e)}>
        <input id="guess" type="integer"></input>
        <button type="submit">Guess</button>
      </form>
      <h2 id="output"></h2>
      <ul>
        {guessList.map((guess, index) => (
          <li key={index}>{guess}</li>
        ))}
      </ul>
      {isConfettiActive && <Confetti active={isConfettiActive} />}
    </>
  );
}

export default App;
