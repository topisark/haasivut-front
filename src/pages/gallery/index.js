import { withStyles, Tabs, Tab } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
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
  );
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

  return (
    <div className={ classes.root }>
      <Tabs
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
        indicatorColor="primary"
        classes={{ root: classes.tabsRoot }}
      >
        <Tab label="Häävideo"  />
        <Tab label="Kuvagalleria" />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        Video
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Images/>
      </TabPanel>
    </div>
  )
}

export default withStyles(styles)(Gallery)