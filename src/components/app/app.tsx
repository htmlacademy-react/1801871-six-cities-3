import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute, AuthState } from '../../const';

import { Offer } from '../../types/offers';

import Layout from '../layout/layout';
import MainScreen from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found/not-found';
import LoginScreen from '../../pages/login/login';
import OffersScreen from '../../pages/offers/offers';
import FavoritesScreen from '../../pages/favorites/favorites';

import PrivateRoute from '../private-page/private-page';


type AppScreenProps = {
    amountOfPlaces: number;
    offers:Offer[];
  }


function App({amountOfPlaces, offers}:AppScreenProps): JSX.Element {
  return (


    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout authorizationStatus={AuthState.NoAuth}/>}>

          <Route index element={<MainScreen amountOfPlaces={amountOfPlaces} offers = {offers}/>}/>

          <Route path={AppRoute.Offer} element={<OffersScreen/>}/>

          <Route path={AppRoute.Favorite} element={
            <PrivateRoute authorizationStatus={AuthState.Auth}>
              <FavoritesScreen offers = {offers}/>
            </PrivateRoute>
          }
          />

          <Route path={AppRoute.Login} element={<LoginScreen/>}/>

          <Route path='*' element={<NotFoundScreen notFoundPageType={'route'} />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
