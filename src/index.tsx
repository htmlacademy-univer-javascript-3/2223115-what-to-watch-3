import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AppProps } from './components/app/app-props';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appData: AppProps = {
  filmCard: {
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    date: '2014',

  },
  smallFilmCards: [
    {
      imgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      title: 'Fantastic Beasts: The Crimes of Grindelwald',
    },
    {
      imgSrc: 'img/bohemian-rhapsody.jpg',
      title: 'Bohemian Rhapsody',
    },
    {
      imgSrc: 'img/macbeth.jpg',
      title: 'Macbeth',
    },
    {
      imgSrc: 'img/aviator.jpg',
      title: 'Aviator',
    },
    {
      imgSrc: 'img/we-need-to-talk-about-kevin.jpg',
      title: 'We need to talk about Kevin',
    },
    {
      imgSrc: 'img/what-we-do-in-the-shadows.jpg',
      title: 'What We Do in the Shadows',
    },
    {
      imgSrc: 'img/revenant.jpg',
      title: 'Revenant',
    },
    {
      imgSrc: 'img/johnny-english.jpg',
      title: 'Johnny English',
    },
    {
      imgSrc: 'img/shutter-island.jpg',
      title: 'Shutter Island',
    },
    {
      imgSrc: 'img/pulp-fiction.jpg',
      title: 'Pulp Fiction',
    },
    {
      imgSrc: 'img/no-country-for-old-men.jpg',
      title: 'No Country for Old Men',
    },
    {
      imgSrc: 'img/snatch.jpg',
      title: 'Snatch',
    },
    {
      imgSrc: 'img/moonrise-kingdom.jpg',
      title: 'Moonrise Kingdom',
    },
    {
      imgSrc: 'img/seven-years-in-tibet.jpg',
      title: 'Seven Years in Tibet',
    },
    {
      imgSrc: 'img/midnight-special.jpg',
      title: 'Midnight Special',
    },
    {
      imgSrc: 'img/war-of-the-worlds.jpg',
      title: 'War of the Worlds',
    },
    {
      imgSrc: 'img/dardjeeling-limited.jpg',
      title: 'Dardjeeling Limited',
    },
    {
      imgSrc: 'img/orlando.jpg',
      title: 'Orlando',
    },
    {
      imgSrc: 'img/mindhunter.jpg',
      title: 'Mindhunter',
    },
    {
      imgSrc: 'img/midnight-special.jpg',
      title: 'Midnight Special',
    },
  ]
};

root.render(
  <React.StrictMode>
    <App
      filmCard={appData.filmCard}
      smallFilmCards={appData.smallFilmCards}
    />
  </React.StrictMode>
);
