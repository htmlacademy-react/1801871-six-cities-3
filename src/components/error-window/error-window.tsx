import { useAppSelector } from '../../store/hooks';

function ErrorWindow ():JSX.Element | undefined {
  const error = useAppSelector((state)=> state.errorData);
  if(!error || error.type === 'minor') {
    return undefined;
  }
  return (
    <span className='error-window'>Упс ошибка</span>
  );
}

export default ErrorWindow;
