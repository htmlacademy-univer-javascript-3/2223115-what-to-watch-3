import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AppProps } from './components/app/app-props';
import { films } from './mocks/films';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchFilmsAction, checkAuthAction } from './store/api-action';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appData: AppProps = {
  promoFilmCard: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: '2014',
  },
  filmCards: films,
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilmCard={appData.promoFilmCard}
        filmCards={appData.filmCards}
      />
    </Provider>
  </React.StrictMode>
);
