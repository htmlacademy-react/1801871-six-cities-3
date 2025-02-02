import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute, AuthorizationsStatus } from '../../const';

import MainScreen from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found/not-found';
import LoginScreen from '../../pages/login/login';
import OffersScreen from '../../pages/offers/offers';
import FavoritesScreen from '../../pages/favorites/favorites';

import PrivateRoute from '../private-page/private-page';


type AppAmountOfPlaces = {
    amountOfPlaces: number;
  }


function App({amountOfPlaces}:AppAmountOfPlaces): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen amountOfPlaces={amountOfPlaces}/>}>
        </Route>
        <Route path={AppRoute.Offer} element={<OffersScreen/>}>
        </Route>
        <Route path={AppRoute.Favorite} element={
          <PrivateRoute authorizationStatus={AuthorizationsStatus.Auth}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<LoginScreen/>}>
        </Route>
        <Route path='*' element={<NotFoundScreen/>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
