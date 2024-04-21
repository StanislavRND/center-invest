import React from 'react';
import styles from './useris.module.scss';
import { useNavigate } from 'react-router-dom';
const UserIsCard = ({ card }) => {
  const [flipped, setFlipped] = React.useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };
	const navigate = useNavigate()
  const formatCardNumber = (cardNumber) => {
    cardNumber = String(cardNumber);
    const formatted = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      formatted.push(cardNumber.substr(i, 4));
    }
    return formatted.join(' ');
  };

  console.log(card);
  return (
    <div className={styles.block__card}>
      <div className={styles.block}>
        <div
          onClick={flipCard}
          className={styles.flipped ? `${styles.card} ${styles.flipped}` : styles.card}>
          <div className={styles.name}>Карта Дона</div>
          <div className={styles.number}>
            {!flipped ? formatCardNumber(card[0].number) : `cvv: ${card[0].cvv}`}
          </div>
        </div>
        <div className={styles.money}>
          <button onClick={() => alert('Заглушка на оплату')} className={styles.replenish}>Пополнить</button>
          <button  onClick={() => navigate('/departments')} className={styles.plastic}>Сделать пластик</button>
        </div>
      </div>

      <div>
        <div className={styles.desc}>
          С картой Дона у вас <br /> много возможностей!
        </div>
        <div className={styles.details}>Подробнее...</div>
      </div>
    </div>
  );
};

export default UserIsCard;
