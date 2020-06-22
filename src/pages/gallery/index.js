import { withStyles } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import React from 'react'

import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'

const IMAGE_ROOT = 'https://topi-anniina-haakuvat.s3.eu-central-1.amazonaws.com'

const IMAGE_AMOUNT = 2

const renderItem = ({ original }) => {
  return (
    <div>
      <img style={{ maxHeight: 'calc(100vh - 180px)' }} className="image-gallery-image" src={original}/>
    </div>
  )
}

const images = Array.from(Array(IMAGE_AMOUNT), (_, i) => i + 1).map(n => ({
  original: `${ IMAGE_ROOT }/${ n }.jpg`,
  thumbnail: `${ IMAGE_ROOT }/${ n }-thumb.jpg`,
  renderItem: renderItem
}))

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})

const Gallery = ({ classes }) => {

  const height = window.innerHeight

  console.log('height', height)

  return (
    <div className={ classes.root }>
      <ImageGallery lazyLoad={true} items={ images }/>
    </div>
  )
}

export default withStyles(styles)(Gallery)