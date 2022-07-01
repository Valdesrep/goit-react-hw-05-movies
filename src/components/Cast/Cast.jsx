import { useEffect, useState } from 'react';
import { fetchCredits } from '../../servises/Api';
import s from './Cast.module.css';
import propTypes from 'prop-types';

export default function Cast({ id }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchCredits(id);
        setCasts(response);
      } catch {
        console.log('errror');
      }
    }
    fetch();
  }, [id]);

  return (
    <ul className={s.list}>
      {casts.map(cast => (
        <li key={cast.id} className={s.item}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="100px"
              onError={e => {
                e.target.src =
                  'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg';
              }}
            />
          </div>
          <div>
            {' '}
            <p>Name: {cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = { id: propTypes.string.isRequired };
