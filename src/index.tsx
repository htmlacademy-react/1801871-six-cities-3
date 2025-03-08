import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Mock } from './const';
import { Offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      amountOfPlaces={Mock.amountOfPlaces} offers = {Offers}
    />
  </React.StrictMode>
);
