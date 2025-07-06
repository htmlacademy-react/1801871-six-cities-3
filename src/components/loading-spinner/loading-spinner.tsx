import './loading-spinner.css';

export default function LoadingSpinner():JSX.Element {
  return (
    <div className='modal__container'>
      <span className="loader"></span>
    </div>
  );
}
