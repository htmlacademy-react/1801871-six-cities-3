import MainScreen from '../../pages/main-page/main-page';
// import LoginScreen from '../../pages/login/login';
// import OffersScreen from '../../pages/offers/offers';
// import FavoritesScreen from '../../pages/favorites/favorites';


type AppAmountOfPlaces = {
    amountOfPlaces: number;
  }


function App({amountOfPlaces}:AppAmountOfPlaces): JSX.Element {
  return (
    <MainScreen amountOfPlaces = {amountOfPlaces}>
    </MainScreen>
  );
}

// function App(): JSX.Element {
//   return (
//     <LoginScreen></LoginScreen>
//   );
// }

// function App(): JSX.Element {
//   return (
//     <OffersScreen></OffersScreen>
//   );
// }

// function App(): JSX.Element {
//   return (
//     <FavoritesScreen></FavoritesScreen>
//   );
// }

export default App;
