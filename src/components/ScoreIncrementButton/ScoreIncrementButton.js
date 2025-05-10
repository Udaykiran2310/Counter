import './ScoreIncrementButton.css';
function ScoreIncrementButton(props){
    
    const{incrementCounter} = props;
    
    return(
        <div className='flex-center'>
        <button className='score-button'  onClick={function(){incrementCounter(1);}}>+1</button>
        <button className='score-button'  onClick={function(){incrementCounter(5);}}>+5</button>
        <button className='score-button'  onClick={function(){incrementCounter(-5);}}>-5</button>
        <button className='score-button'  onClick={function(){incrementCounter(10);}}>+10</button>
        <button className='score-button'  onClick={function(){incrementCounter(100);}}>+100</button>
      </div>
    );
}

export default ScoreIncrementButton; 
