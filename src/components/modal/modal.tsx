type ModalProps = {
  children: JSX.Element | never[],
  onClose(): void,
}

function Modal({onClose, children}: ModalProps): JSX.Element {
  return (
    <>
      <div onClick={onClose} className="fixed top-0 right-0 bottom-0 left-0 bg-black/50"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] min-h-[150px] rounded bg-white">
        <h2 className="text-center">Форма</h2>
        {children}
      </div>
    </>
  );
}

export default Modal;
