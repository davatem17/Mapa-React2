import React, {useState} from 'react'
import SvgComponent from './components/Flecha';
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
    let aux=0;
    
   
    const geolocateControlStyle = {
        right: 10,
        top: 10
      };
    const [viewport, setViewport] = useState({
        latitude: -1.264417,
        longitude: -78.608275,
        zoom: 10,
        width: "100vw",
        height: "100vh"
    });
    
    const latitudeOrigin = 1.50112
    const longitudeOrigin = 2.24530

    const latitudeEnd = -1.15327
    const longitudeEnd = 1.04242
   
    const latitudeNew = latitudeEnd - latitudeOrigin
    const longitudeNew = longitudeEnd - longitudeOrigin

    let aux2
    let angleCalculate
    let angleFinal
    aux2 = Math.atan((latitudeNew/longitudeNew))
    angleCalculate = aux2*(180/Math.PI)+180
    angleFinal = 90 - angleCalculate
    console.log('angulo',angleFinal) 

    return (

        <div>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={
                    process.env.REACT_APP_MAPBOX_TOKEN
                }
                onViewportChange={
                    viewport => {
                        setViewport(viewport);
                    }
            }>
                <GeolocateControl style={geolocateControlStyle}
                    positionOptions={
                        {enableHighAccuracy: true}
                    }
                    trackUserLocation={true}
                    auto></GeolocateControl>
                <Marker latitude={0}
                    longitude={0}>
                    <SvgComponent transform={`rotate(${aux} )`}/>
                </Marker>
                <Marker latitude={1.50112}
                    longitude={2.24530}>
                    <SvgComponent transform={`rotate(${56.23486} )`}/>
                </Marker>
                <Marker latitude={-1.15327}
                    longitude={1.04242}>
                    <SvgComponent transform={`rotate(${angleFinal} )`}/>
                </Marker>
            </ReactMapGL>
        </div>


    );
}

export default App;
