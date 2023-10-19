import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AppProps } from './components/app/app-props';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appData: AppProps = {
  promoFilmCard: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    date: '2014',
  },
  filmCards: films,
};

root.render(
  <React.StrictMode>
    <App
      promoFilmCard={appData.promoFilmCard}
      filmCards={appData.filmCards}
    />
  </React.StrictMode>
);
