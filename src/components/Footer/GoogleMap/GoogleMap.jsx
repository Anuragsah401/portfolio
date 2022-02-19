import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Marker = ({ markerLogo }) =>
(
    <div style={{
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(-50%, -50%)'
    }}>
        {markerLogo}
    </div>
)

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 27.71,
            lng: 85.32
        },
    };
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_API}` }}
                    defaultCenter={this.props.center}
                    defaultZoom={10}
                >
                    <Marker
                        lat={27.717245}
                        lng={85.323959}
                        markerLogo={<FontAwesomeIcon icon={faMapMarkerAlt} className="text-[2rem]" color="#4FBDBA" />}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;