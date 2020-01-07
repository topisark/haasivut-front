import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
//const mapStyle = [ { "elementType": "geometry", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "geometry.fill", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "geometry.stroke", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels.icon", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels.text.stroke", "stylers": [ { "hue": "#ff0000" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#aacdcf" } ] } ]
//const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#aacdcf" }, { "visibility": "on" } ] } ]
const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#e0dfe1" }, { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [ { "color": "#bebdbf" } ] }, { "featureType": "poi", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.attraction", "elementType": "geometry.fill", "stylers": [ { "color": "#aacdcf" } ] }, { "featureType": "road", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "transit", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "stylers": [ { "color": "#aacdcf" }, { "visibility": "on" } ] } ]

const infoboxOptions = {disableAutoPan: true, boxStyle: {overflow: 'visible', width: 'auto'}, enableEventPropagation: true, closeBoxURL: ""}

const markers = [
  {
    lat: 60.180741,
    lng: 25.006642,
    label: 'Kulosaaren Casino'
  },
  {
    lat: 60.184573,
    lng: 25.010732,
    label: 'Kulosaaren kirkko'
  }
]

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 60.183416, lng: 25.009115 }}
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
      { markers.map(marker => (
          <InfoBox
            defaultOptions={infoboxOptions} position={new window.google.maps.LatLng(marker.lat, marker.lng)}
          >
            <Paper style={{ padding: 4 }}>
              <Typography variant="caption">{marker.label}</Typography>
            </Paper>
          </InfoBox>
      ))}
    </GoogleMap>
  )
}

export default withGoogleMap(Map)