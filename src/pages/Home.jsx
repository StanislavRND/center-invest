import React, { useEffect, useState } from 'react';
import ApiService from '../API/ApiService';
import Header from '../components/header/Header';
import UserNotCard from '../components/main/userNotCard/UserNotCard';
import UserIsCard from '../components/main/userIsCard/UserIsCard';

const Home = () => {
  const [isCard, setIsCard] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
	const [card, setCard] = useState([]);

  useEffect(() => {
    ApiService.infoUserCard(setIsCard, setIsLoading, setCard);
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {isLoading ? <div>Загрузка...</div> : <>{isCard ? <UserIsCard card={card} /> : <UserNotCard />} </>}
      </div>
    </>
  );
};

export default Home;
