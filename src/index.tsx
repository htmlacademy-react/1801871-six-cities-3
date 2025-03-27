import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Mock } from './const';
import { Offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        amountOfPlaces={Mock.amountOfPlaces} offers = {Offers}
      />
    </Provider>
  </React.StrictMode>
);
