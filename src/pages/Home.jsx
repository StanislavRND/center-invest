import React, { useEffect } from 'react';
import ApiService from '../API/ApiService';
import Header from '../components/header/Header';
import UserNotCard from '../components/main/userNotCard/UserNotCard';
import UserIsCard from '../components/main/userIsCard/UserIsCard';

const Home = () => {
  const [isCard, setIsCard] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    ApiService.infoUserCard(setIsCard, setIsLoading);
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {isLoading ? <div>Загрузка...</div> : <>{isCard ? <UserIsCard /> : <UserNotCard />} </>}
      </div>
    </>
  );
};

export default Home;
