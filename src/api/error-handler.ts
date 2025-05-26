import { TIME_ERROR } from '../const';
import { setError} from '../store/actions';
import { store } from '../store/store';
import { ErrorData } from './error-type';

function SetError(error:ErrorData) {

  store.dispatch(setError(error));
  setTimeout(()=> {
    store.dispatch(setError(null));
  }, TIME_ERROR);
}

export default SetError;
