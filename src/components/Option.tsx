interface OptionProps {
  option: string;
  checker: CallableFunction;
}
function Option({ option, checker }: OptionProps) {
  const isCorrect = () => {
    checker(option);
  };
  return (
    <div className="option" onClick={isCorrect}>
      {option}
    </div>
  );
}

export default Option;
