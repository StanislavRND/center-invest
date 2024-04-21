import React, { useEffect, useState } from 'react';
import ApiService from '../API/ApiService';
import Header from '../components/header/Header';
import Applications from '../components/main/applications/Applications';

const Moderator = () => {
  const [items, setItems] = useState([]);
	const [userId, setUserId] = React.useState(null);
  useEffect(() => {
    ApiService.getCards(setItems);
		ApiService.infoUserId(setUserId)
  }, []);

  return (
    <>
      <Header />
      <div className="container">
				<Applications setItems={setItems} userId={userId} items={items}/>
      </div>
    </>
  );
};

export default Moderator;
