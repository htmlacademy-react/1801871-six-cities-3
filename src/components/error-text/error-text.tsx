import { useAppSelector } from '../../store/hooks';

function ErrorText ():JSX.Element {
  const errorText = useAppSelector((state)=> state.errorMessage);
  return(
    <span>{errorText}</span>
  );
}

export default ErrorText;
