import { useEffect, useState } from 'react';
import { fetchReviews } from '../../servises/Api';
import s from './Reviews.module.css';
import propTypes from 'prop-types';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetch() {
      const response = await fetchReviews(id);
      setReviews(response);
    }
    fetch();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(review => (
            <li key={review.id} className={s.item}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this film</p>
      )}
    </>
  );
}
Reviews.propTypes = { id: propTypes.string.isRequired };
