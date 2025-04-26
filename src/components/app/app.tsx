import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute, AuthState } from '../../const';

import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found/not-found';
import LoginScreen from '../../pages/login/login';
import OffersScreen from '../../pages/offers/offers';
import FavoritesScreen from '../../pages/favorites/favorites';

import PrivateRoute from '../private-page/private-page';


function App(): JSX.Element {
  return (


    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout authorizationStatus={AuthState.NoAuth}/>}>

          <Route index element={<MainPage/>}/>

          <Route path={AppRoute.Offer} element={<OffersScreen/>}/>

          <Route path={AppRoute.Favorite} element={
            <PrivateRoute authorizationStatus={AuthState.Auth}>
              <FavoritesScreen/>
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
