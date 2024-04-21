import React from 'react'
import Header from '../components/header/Header'
import ApiService from '../API/ApiService'
import EventsItems from '../components/main/events/Events';
const Events = () => {
	const [events, setEvents] = React.useState([]);

	React.useEffect(() => {
		ApiService.getEvents(setEvents)
	}, [])
	console.log(events);
	return (
		<>
		<Header/>
		<div className="container">
			<div style={{padding: '40px 0'}}>
				<div >
				<EventsItems events={events}/>
				</div>
			</div>
		</div>
		</>
	)
}

export default Events