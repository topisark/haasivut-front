import React from 'react'
import { GoogleMap, Marker, Polyline, withGoogleMap } from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import PlaceMarker from './PlaceMarker'
import heartIcon from '../assets/heart.png'

//const mapStyle = [ { "elementType": "geometry", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "geometry.fill", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "geometry.stroke", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels.icon", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels.text.stroke", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#aacdcf" } ] } ]
//const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#aacdcf" }, { "visibility": "on" } ] } ]
const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#e0dfe1" }, { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [ { "color": "#bebdbf" } ] }, { "featureType": "poi", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.attraction", "elementType": "geometry.fill", "stylers": [ { "color": "#aacdcf" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#d3e3cf" } ] }, { "featureType": "road", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "transit", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "stylers": [ { "color": "#aacdcf" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#e0edf3" } ] } ]

const infoboxOptions = {anchor: new window.google.maps.Point(0,5), disableAutoPan: true, boxStyle: {overflow: 'visible', width: 'auto'}, enableEventPropagation: true, closeBoxURL: ""}

const markers = [
  {
    lat: 60.18059872183,
    lng: 25.0067074037,
    label: 'Kulosaaren Casino'
  },
  {
    lat: 60.184573,
    lng: 25.010732,
    label: 'Kulosaaren kirkko'
  }
]

const walkingPath = [
  {
    "lat": 60.18455354722347,
    "lng": 25.01082681900224
  },
  {
    "lat": 60.18449425217528,
    "lng": 25.011103363057256
  },
  {
    "lat": 60.1844583921328,
    "lng": 25.011147475549674
  },
  {
    "lat": 60.18433494336332,
    "lng": 25.011022065341535
  },
  {
    "lat": 60.18435619529053,
    "lng": 25.01089776190459
  },
  {
    "lat": 60.18423679428914,
    "lng": 25.010785188047475
  },
  {
    "lat": 60.183855595591666,
    "lng": 25.010467016689056
  },
  {
    "lat": 60.18374410392334,
    "lng": 25.01038956230423
  },
  {
    "lat": 60.18320188242789,
    "lng": 25.01001489431312
  },
  {
    "lat": 60.18297516415075,
    "lng": 25.00980715638474
  },
  {
    "lat": 60.18266115347922,
    "lng": 25.009560618735243
  },
  {
    "lat": 60.1826638478517,
    "lng": 25.009410857720855
  },
  {
    "lat": 60.18265416742474,
    "lng": 25.009231103564854
  },
  {
    "lat": 60.18259179238865,
    "lng": 25.008823134048445
  },
  {
    "lat": 60.1824263151979,
    "lng": 25.008435530092154
  },
  {
    "lat": 60.182119830471784,
    "lng": 25.008324911028883
  },
  {
    "lat": 60.181904055634185,
    "lng": 25.00833591149834
  },
  {
    "lat": 60.181660416927365,
    "lng": 25.008427557588934
  },
  {
    "lat": 60.181536809160306,
    "lng": 25.008437937589473
  },
  {
    "lat": 60.181499072076456,
    "lng": 25.00830155795525
  },
  {
    "lat": 60.181534980236044,
    "lng": 25.0079031035206
  },
  {
    "lat": 60.18152379840883,
    "lng": 25.00774770456046
  },
  {
    "lat": 60.18146962354215,
    "lng": 25.007416957173824
  },
  {
    "lat": 60.18143850398294,
    "lng": 25.007248739749272
  },
  {
    "lat": 60.18132703786664,
    "lng": 25.00727440624744
  },
  {
    "lat": 60.18124491952808,
    "lng": 25.007259773447068
  },
  {
    "lat": 60.18117772490624,
    "lng": 25.007149640885
  },
  {
    "lat": 60.18092887571189,
    "lng": 25.00672207788899
  },
  {
    "lat": 60.18078857862028,
    "lng": 25.00682270059356
  },
  {
    "lat": 60.1807003795867,
    "lng": 25.00688317970264
  },
  {
    "lat": 60.18064675875214,
    "lng": 25.006772111262794
  },
]

const lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 4
};

const Map = () => {

  const handleRightClick = event => {
    const { lat, lng } = event.latLng
    const coordinates = { lat: lat(), lng: lng() }
    console.log(JSON.stringify(coordinates, null, 2) + ',')
  }

  return (
    <GoogleMap
      onRightClick={handleRightClick}
      defaultZoom={15}
      defaultCenter={{ lat: 60.18375031, lng: 25.0106028291 }}
      defaultOptions={{
        styles: mapStyle,
        mapTypeControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        },
        streetViewControlOptions: {
          position: window.google.maps.ControlPosition.LEFT_BOTTOM
        },
        gestureHandling: 'greedy',
        scaleControl: true,
        clickableIcons: false,
        fullscreenControl: false,
        zoomControl: false,
      }}
    >
      <Polyline
        defaultOptions={{
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
          strokeOpacity: 0,
          strokeWeight: 2,
          strokeColor: '#eec0c6'
        }}
        path={walkingPath}
      />
      { markers.map(marker => (
        <Marker
          key={'marker-' + marker.label}
          icon={{ url: heartIcon, scaledSize: new window.google.maps.Size(20, 20)}}
          position={{ lat: marker.lat, lng: marker.lng }}
        >
          <InfoBox defaultOptions={infoboxOptions} position={new window.google.maps.LatLng(marker.lat, marker.lng)}>
            <PlaceMarker
              address={marker.label}
            />
          </InfoBox>
        </Marker>
      ))}
    </GoogleMap>
  )
}

export default withGoogleMap(Map)