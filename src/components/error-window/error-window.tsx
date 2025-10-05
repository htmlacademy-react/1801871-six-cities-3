import { useAppSelector } from '../../store/hooks';
import { getSelector } from '../../store/selectors';

function ErrorWindow ():JSX.Element | undefined {
  const error = useAppSelector(getSelector('error','errorData'));
  if(!error || error.type === 'validation') {
    return undefined;
  }
  return (
    <span className='error-window modal__container'>Упс ошибка</span>
  );
}

export default ErrorWindow;
