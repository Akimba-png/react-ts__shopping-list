import { createContext, useState } from 'react';

interface IModalContext {
  isModalOpen: boolean;
  handlerModalOpen: () => void;
  handlerModalClose: () => void;
}

type ModalStateProps = {
  children: JSX.Element,
}

export const ModalContext = createContext<IModalContext>({
  isModalOpen: false,
  handlerModalOpen: () => {},
  handlerModalClose: () => {},
});

export const ModalState = ({children}: ModalStateProps): JSX.Element => {
  const [ isModalOpen, setModalStatus ] = useState<boolean>(false);
  const handlerModalOpen = () => setModalStatus(true);
  const handlerModalClose = () => setModalStatus(false);
  return (
    <ModalContext.Provider value={{ isModalOpen, handlerModalOpen, handlerModalClose}}>
      {children}
    </ModalContext.Provider>
  );
};
