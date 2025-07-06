import { useAppSelector } from '../../store/hooks';
import { getSelector } from '../../store/selectors';

function ErrorWindow ():JSX.Element | undefined {
  const error = useAppSelector(getSelector('error','errorData'));
  if(!error || error.type === 'minor') {
    return undefined;
  }
  return (
    <span className='error-window'>Упс ошибка</span>
  );
}

export default ErrorWindow;
