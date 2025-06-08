import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute, AuthState } from '../../const';

import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found/not-found';
import LoginScreen from '../../pages/login/login';
import OffersScreen from '../../pages/offers/offers';
import FavoritesScreen from '../../pages/favorites/favorites';

import PrivateRoute from '../private-page/private-page';

import { checkAuthAction, fetchFavorites, fetchOffers } from '../../store/api-action';
import { store } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state)=> state.auth.authStatus);
  useEffect(() => {
    if (authStatus === AuthState.Auth) {
      dispatch(fetchFavorites());
    }
  }, [authStatus, dispatch]);


  return (


    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout authorizationStatus={authStatus}/>}>

          <Route index element={<MainPage/>}/>

          <Route path={AppRoute.Offer} element={<OffersScreen/>}/>

          <Route path={AppRoute.Favorite} element={
            <PrivateRoute authorizationStatus={authStatus}>
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
