import './loading-spinner.css';

export function LoadingSpinner():JSX.Element {
  return (
    <div className='modal__container'>
      <span className="loader"></span>
    </div>
  );
}
