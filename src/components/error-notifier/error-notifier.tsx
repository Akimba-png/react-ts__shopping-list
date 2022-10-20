type ErrorNotifierPrors = {
  message: string,
}

function ErrorNotifier({message}: ErrorNotifierPrors): JSX.Element {
  return (
    <p className="text-center text-xl text-red-500 font-bold-500">{message}</p>
  );
}

export default ErrorNotifier;
