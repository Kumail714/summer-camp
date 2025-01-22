import React from 'react'
import GoogleMapReact from 'google-map-react';

// 33.636122, 73.081867
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
          lat: 33.636122,
          lng: 73.081867
        },
        zoom: 11
      };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map
