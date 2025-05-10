import { useState } from 'react';
import './App.css';
import ScoreCard from './components/ScoreCard/ScoreCard';
import ScoreIncrementButton from './components/ScoreIncrementButton/ScoreIncrementButton';

function App() {
  let [score, scoreFun] = useState(0);
  function incrementCounter(value){
    score = score+value;
    scoreFun(score);

      // counter = counter + 1;
      // console.log("updated counter", counter);
  }
  return (
    <div>
      <ScoreCard score={score} />
      <ScoreIncrementButton incrementCounter={incrementCounter}/>
    </div>
  );

}

export default App;
