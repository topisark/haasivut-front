import { withStyles, Tabs, Tab, CircularProgress } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import React from 'react'

import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'

const IMAGE_ROOT = 'https://topi-anniina-haakuvat.s3.eu-central-1.amazonaws.com'

const IMAGE_AMOUNT = 29

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabsRoot: {
    marginBottom: theme.spacing(2),
  },
  loadingIndicator: {
    marginTop: theme.spacing(6)
  }
})

const renderItem = ({ original }) => {
  return (
    <div>
      <img style={{ maxHeight: 'calc(100vh - 320px)' }} className="image-gallery-image" src={original}/>
    </div>
  )
}

const images = Array.from(Array(IMAGE_AMOUNT), (_, i) => i + 1).map(n => ({
  original: `${ IMAGE_ROOT }/${ n }.jpg`,
  thumbnail: `${ IMAGE_ROOT }/thumbnails/${ n }.jpg`,
  renderItem: renderItem
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ display: value === index ? 'inherit' : 'none' }}
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  )
}

const Images = withStyles(styles)(({ classes }) => {
  return (
    <div style={{ maxWidth: 'calc(100vw - 20px)' }}>
      <ImageGallery
        lazyLoad={true}
        items={ images }
      />
    </div>
  )
})

const Gallery = ({ classes }) => {
  const [ activeTab, setActiveTab ] = React.useState(0)
  const [ loading, setLoading ] = React.useState(true)
  const [ playing, setPlaying ] = React.useState(false)

  const handleTabChange = newValue => {
    setActiveTab(newValue)
    setPlaying(false)
  }
  
  return (
    <div className={ classes.root }>
      <Tabs
        value={activeTab}
        onChange={(event, newValue) => handleTabChange(newValue)}
        indicatorColor="primary"
        classes={{ root: classes.tabsRoot }}
      >
        <Tab label="Häävideo"  />
        <Tab label="Kuvagalleria" />
      </Tabs>
      { loading &&
        <div className={classes.loadingIndicator}>
          <CircularProgress color="primary" size={100} />
        </div>
      }
      <TabPanel value={activeTab} index={0}>
        <ReactPlayer
          onPlay={() => setPlaying(true)}
          playing={playing}
          style={{ display: loading ? 'none' : 'inherit' }}
          className='react-player fixed-bottom'
          url='https://topi-anniina-haakuvat.s3.eu-central-1.amazonaws.com/video_720.mp4'
          width='100%'
          height='100%'
          controls={true}
          onReady={() => setLoading(false)}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Images/>
      </TabPanel>
    </div>
  )
}

export default withStyles(styles)(Gallery)