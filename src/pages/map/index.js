import React from 'react'
import { withStyles } from '@material-ui/core'
import Map from '../../components/Map'

const styles = theme => ({
  root: {
    margin: `-${theme.spacing(2)}px`
  }
})

const MapPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Map
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="map-wrapper"  style={{ height: `${window.innerHeight - 56}px`, transition: 'height 300ms ease-in-out' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default withStyles(styles)(MapPage)