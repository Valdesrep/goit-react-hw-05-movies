import Notiflix from 'notiflix';

export default function NotFound() {
  return <div>{Notiflix.Notify.failure('NotFound')}</div>;
}
