import React from 'react';
import styles from './applications.module.scss';
import ApiService from '../../../API/ApiService';
const Applications = ({ items, userId, setItems }) => {
  const [isModal, setIsModal] = React.useState(false);

	const handleChange = (itemId) => {
		console.log(itemId);
		ApiService.changeStatusCard(itemId, userId, setIsModal, setItems)
	}

  return (
    <div className={styles.applications}>
      <div className={styles.title}>Заявки</div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div data-id={item.id} key={item.id} className={styles.item}>
            <div>{index + 1}.</div>
            <div onClick={() => setIsModal(true)} className={styles.reference}>
              Просмотреть справку
            </div>
            {isModal && (
              <div className={styles.modal__overlay}>
                <div className={styles.modal}>
                  <div onClick={() => setIsModal(false)} className={styles.close}>
                    Закрыть
                  </div>
                  <div className={styles.content}>
                    <img src={item.certificate} width={512} height={512} alt="" />
                    <div className={styles.block__button}>
                      <button onClick={() => handleChange(item.id)} className={styles.accept}>Принять</button>
                      <button className={styles.deny}>Отказать </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
