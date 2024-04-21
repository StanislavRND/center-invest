import { Map, Marker } from 'pigeon-maps';
import React from 'react';
import ApiService from '../API/ApiService';
import Header from '../components/header/Header';

const RecordDoctor = () => {
  const [marker, setMarker] = React.useState([]);

  React.useEffect(() => {
    ApiService.getMarkerHospitals(setMarker);
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="map">
					<div style={{fontSize: '32px', marginBottom: '15px', fontWeight: 500}}>Больницы</div>
          <Map height={600} defaultCenter={[47.2248606, 39.7022858]} defaultZoom={11}>
            {marker.map((marker) => (
              <Marker
                hover={marker.title}
                key={marker.id}
                width={50}
                anchor={[marker.latitude, marker.longitude]}></Marker>
            ))}
          </Map>
        </div>
      </div>
    </>
  );
};

export default RecordDoctor;
