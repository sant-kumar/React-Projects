import styled from "styled-components"
import NumSelector from "./NumSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [score, setScore] = useState(0);

  const[selectedNum, setSelectedNum] = useState();
  const[currentDice, setCurrentDice] = useState(1);
  const[error, setError] = useState("");
  const[showRules, setShowRules] = useState(false);
 

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min)+min);
};

const roleDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return
    };

    const randomNumber=  generateRandomNumber(1,7);

    setCurrentDice((prev) => randomNumber);

    
    if (selectedNum == randomNumber){
      setScore(prev => prev+randomNumber);
    }else{
      setScore(prev => prev-2 );
    }

    setSelectedNum(undefined);
};

const resetScore = () => {
  setScore(0);
}





  return (
    <MainContainer>
        <div className="top_sec">
        <TotalScore score={score}/>
        <NumSelector
        error={error}
        setError = {setError}
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}/>
        </div>
        <RollDice 
        currentDice={currentDice}
        roleDice={roleDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules(prev => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
          {showRules && <Rules/>}

        </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 0px;
    margin: 20px;
    .top_sec{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }




`;