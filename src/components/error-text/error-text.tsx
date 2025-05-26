
type ErrorTextProps = {
  errorText:string;
}

function ErrorText ({errorText}: ErrorTextProps):JSX.Element {
  return(
    <span>{errorText}</span>
  );
}

export default ErrorText;
