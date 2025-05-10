import './ScoreCard.css';
function ScoreCard(props) {
    const{score}=props;
    return(
        <div className='scoreborad-container flex-center'>
            <h1 className='score'>{score}</h1>
        </div>
    );
}
export default ScoreCard;