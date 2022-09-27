import { useEffect, useState } from "react";

const randomOptionHelper = { 1: "Rock", 2: "Paper", 3: "Scissors" };

const PlayerSelection = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [effectTrigger, setEffectTrigger] = useState(true)

  const updatePlayerScore = () => {
    setPlayerScore((prevScore) => prevScore + 1);
    setGameStatus("You won this one!");
  };

  const updateComputerScore = () => {
    setComputerScore((prevScore) => prevScore + 1);
    setGameStatus("Computer wins this one!");
  };



  const addHandler = (event) => {
    setSelectedOption(event.target.value);
    setEffectTrigger(effectTrigger=>!effectTrigger)

    let randomOption = Math.floor(Math.random() * 3 + 1);
    setComputerOption(randomOptionHelper[randomOption]);

  };


    useEffect(() => {
      if (selectedOption === "Rock" && computerOption === "Paper") {
        return updateComputerScore();
      } else if (selectedOption === "Rock" && computerOption === "Scissors") {
        return updatePlayerScore();
      } else if (selectedOption === "Paper" && computerOption === "Rock") {
        return updatePlayerScore();
      } else if (selectedOption === "Paper" && computerOption === "Scissors") {
        return updateComputerScore();
      } else if (selectedOption === "Scissors" && computerOption === "Rock") {
        return updateComputerScore();
      } else if (selectedOption === "Scissors" && computerOption === "Paper") {
        return updatePlayerScore();
      } else {
        setGameStatus("Draw: It's a tie!");
      }
    }, [effectTrigger]);

  return (
    <div>
      <div>
        <span>Player: </span>
        <span>{"["}</span>
        <span>{selectedOption}</span>
        <span>{"]"}</span>
        <span> </span>
        <span>Computer: </span>
        <span>{"["}</span>
        <span>{computerOption}</span>
        <span>{"]"}</span>
        <span> </span>
      </div>
      <br></br>
      <div>
        <span>Player Scored: </span>
        <span>{"["}</span>
        <span>
          {playerScore}
          <span>{"]"}</span>{" "}
        </span>
        <span>Computer Scored: </span>
        <span>{"["}</span>
        <span>{computerScore}</span>
        <span>{"]"}</span>
      </div>
      <div>
        <p> {gameStatus}</p>
      </div>
      <div>
        <div>
          <button value="Rock" onClick={addHandler}>
            Rock
          </button>
        </div>
        <div>
          <button value="Paper" onClick={addHandler}>
            {" "}
            Paper
          </button>
        </div>
        <div>
          <button value="Scissors" onClick={addHandler}>
            {" "}
            Scissors
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerSelection;
