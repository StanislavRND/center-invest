import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import ApiService from '../API/ApiService';

const Moderator = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		ApiService.getCards()
	}, [])
	return (
		<>
		<Header/>
		<div className="container">
			<div>Заявки</div>
			<div></div>
		</div>
		</>
	)
}

export default Moderator