
interface ScoreProp{
    score:number;
}
function ScoreBar({score}: ScoreProp) {
  return (
    <div className="scorebar">
    Έχεις συγκεντρώσει <strong>{score}</strong> πόντους
    </div>
  );
}

export default ScoreBar;
