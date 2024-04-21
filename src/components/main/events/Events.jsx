import React from 'react';
import styles from './event.module.scss';

const EventsItems = ({ events }) => {
	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', options);
	}
  return (
    <div className={styles.items}>
      {events.map((event) => (
        <div className={styles.item} key={event.id}>
          <div className={styles.title}>{event.title}</div>
          <div>{event.description}</div>
          <div className={styles.price__block}>
            <div>{formatDate(event.date)}</div>
            <div>{event.price}</div>
          </div>

          <div>{event.age_limit}</div>
          <div>{event.address}</div>
          <button onClick={() => alert('Заглушка на оплату')} className={styles.button}>Купить</button>
        </div>
      ))}
    </div>
  );
};

export default EventsItems;
