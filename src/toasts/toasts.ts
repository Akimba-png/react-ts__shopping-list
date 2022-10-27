import { toast } from 'react-toastify';

const AUTH_TOAST_MESSAGE = 'Необходимо авторизоваться';

export const notAuthNotify = () => {
  toast.warn(AUTH_TOAST_MESSAGE, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    },
  );
};
