/* eslint-disable no-unused-expressions */
import { MapContainer, GeoJSON } from 'react-leaflet';
import { FC, useState } from 'react';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { mapData } from '../../../../data/floor';
import 'leaflet/dist/leaflet.css';
import Button from '../../../common/buttons/TextButton/Button';
import styles from './Map.module.scss';

const Map: FC = (): JSX.Element => {
  const [isMapView, setIsMapView] = useState(false);
  const [textButtonView, setTextButtonView] = useState('Map view');

  const toggleMapView = () => {
    setIsMapView(!isMapView);
    !isMapView ? setTextButtonView('Scheme') : setTextButtonView('Map view');
  };

  return (
    <div>
      <MapContainer
        style={{ height: '82vh' }}
        zoom={20}
        center={[53.91713, 27.63483]}
      >
        {isMapView && <ReactLeafletGoogleLayer type="hybrid" />}
        <GeoJSON attribution="&copy; 2022" data={mapData} />
      </MapContainer>
      <div className={styles.map__button}>
        <Button text={textButtonView} onClick={toggleMapView} />
      </div>
    </div>
  );
};

export default Map;
