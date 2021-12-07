import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styled from 'styled-components';
import { environment } from '../../../../environments/environment';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.772,
  lng: -117.214,
};

export const GoogleMapWidget = () => {
  const { isLoaded } = useJsApiLoader({
    id: environment.GOOGLE_MAP_ID,
    googleMapsApiKey: environment.GOOGLE_MAP_SECRET
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Container>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Container></Container>
      </GoogleMap>
    </Container>
  ) : (
    <Container></Container>
  );
};

const Container = styled.div`
  width: 100%;
`