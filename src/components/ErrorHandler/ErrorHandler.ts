import {showMessage} from 'react-native-flash-message';

type Error = {
  message: string;
};

const errorMessageHandler = (e: Error) =>
  showMessage({
    message: e.message,
    type: 'danger',
    duration: 5000,
  });

export default errorMessageHandler;
