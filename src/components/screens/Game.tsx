import { useState } from "react";
import questions from "../../questions.json";

//components
import Option from "../Option";
import ScoreBar from "../ScoreBar";
import SkipQuestion from "../NextQuestion";
import Footer from "../Footer";
import Indicator from "../Indicator";
import LogoView from "../LogoView";

function Game() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const options = questions[index].options;

  const isLast = index + 1 < questions.length;

  // handle next question
  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };

  // check for correct answer
  const isCorrect = (option: string) => {
    if (questions[index].correct == option) {
      setScore((score) => score + 10);
      nextQuestion();
    } else {
    }
  };

  return (
    <div className="screen">
      <ScoreBar score={score} />

      <div className="content">
        <LogoView />

        <Indicator index={index + 1} total={questions.length} />

        {/* current question */}
        <div className="question">{questions[index].question}</div>

        {/* render dynamic options */}
        <div className="options">
          {options.map((option) => {
            return <Option option={option} checker={isCorrect} />;
          })}
        </div>

        {/* next question */}
        {isLast && (
          <SkipQuestion text="⛔ Επόμενη Ερώτηση" handle={nextQuestion} />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Game;
