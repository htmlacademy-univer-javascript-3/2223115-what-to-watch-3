import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>WTW: Страница не найдена</title>
      </Helmet>
      <h1>Ой... Кажется, что-то сломалось.</h1>
      <br/>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
}
