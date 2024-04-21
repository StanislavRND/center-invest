import { Map, Marker } from 'pigeon-maps';
import React from 'react';
import ApiService from '../API/ApiService';
import Header from '../components/header/Header';

const Departments = () => {
  const [marker, setMarker] = React.useState([]);

  React.useEffect(() => {
    ApiService.getMarkerBanks(setMarker);
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="map">
          <div style={{ fontSize: '32px', marginBottom: '15px', fontWeight: 500 }}>
            Отделения Центр-Инвест
          </div>
          <Map height={600} defaultCenter={[47.2248606, 39.7022858]} defaultZoom={11}>
            {marker.map((marker) => (
              <Marker
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

export default Departments;
