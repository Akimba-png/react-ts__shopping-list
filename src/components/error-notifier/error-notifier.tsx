type ErrorNotifierPrors = {
  message: string,
  additionalStyle?: string,
}

function ErrorNotifier({message, additionalStyle = ''}: ErrorNotifierPrors): JSX.Element {
  const defaultStyle = "text-center text-red-500 font-bold-500";
  const style = [defaultStyle, additionalStyle]
  return (
    <p className={style.join(' ')}>{message}</p>
  );
}

export default ErrorNotifier;
