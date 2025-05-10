import { TIME_ERROR } from '../const';
import { setErrorText } from '../store/actions';
import { store } from '../store/store';

function SetError(error:string) {
  store.dispatch(setErrorText(error));
  setTimeout(()=> {
    store.dispatch(setErrorText(''));
  }, TIME_ERROR);
}

export default SetError;
