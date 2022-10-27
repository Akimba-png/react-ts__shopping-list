import { useState, createContext } from 'react';

interface ILoginContext {
  isAuth: boolean,
  handleAuthStatus: () => void,
}

type LoginStateProps = {
  children: JSX.Element,
}

const defaultValue: ILoginContext = {
  isAuth: false,
  handleAuthStatus: () => null,
};

export const LoginContext = createContext<ILoginContext>(defaultValue);

export const LoginState = ({children}: LoginStateProps): JSX.Element => {
  const [ isAuth, setAuthStatus ] = useState<boolean>(false);
  const handleAuthStatus = () => setAuthStatus((prev) => !prev);
  return (
    <LoginContext.Provider value={{isAuth, handleAuthStatus}}>
      {children}
    </LoginContext.Provider>
  );
};
