interface ButtonProps {
  text: string;
  handle: VoidFunction;
}
function SkipQuestion({ text, handle }: ButtonProps) {
  const handler = () => {
    handle();
  };

  return (
    <div className="skip" onClick={handler}>
      {text}
    </div>
  );
}

export default SkipQuestion;
