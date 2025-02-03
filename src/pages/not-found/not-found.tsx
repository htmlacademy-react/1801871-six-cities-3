import React from 'react';
import Logo from '../../components/logo/logo';

function NotFoundScreen ():JSX.Element {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className='page__main'>
        <section className='not-found container'>
          <p className='not-found__warning'>404, unfortunately the page was not found! <br></br>Return to the main page by clicking on the logo.</p>
        </section>
      </main>
    </React.Fragment>
  );
}

export default NotFoundScreen;
