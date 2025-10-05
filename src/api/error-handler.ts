import { TIME_ERROR } from '../const';
import { setError } from '../store/error-slice/error-slice';
import { AppDispatch } from '../types/state';
import { ErrorData } from './error-type';


export function setErrorHandler(error:ErrorData | null, dispatch: AppDispatch) {

  dispatch(setError(error));
  setTimeout(()=> {
    dispatch(setError(null));
  }, TIME_ERROR);
}

