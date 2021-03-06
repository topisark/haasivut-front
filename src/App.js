import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { withStyles, MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import FavoriteBorderIcon from '@material-ui/icons/Favorite'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import InfoIcon from '@material-ui/icons/Info'
import RoomIcon from '@material-ui/icons/Room'
import GoogleAnalytics from './components/GoogleAnalytics'
import NavBar from './components/NavBar'
import Home from './pages/home'
import Schedule from './pages/schedule'
import Info from './pages/info'
import Gallery from './pages/gallery'
import Map from './pages/map'
import { reverse } from './utils'

//import PersonAddIcon from '@material-ui/icons/PersonAdd'
//import Register from './pages/register'


const styles = theme => ({
  root: {
    height: '100%',
  },
  content: {
    padding: theme.spacing(2)
  }
})

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#5d5d5d',
    },
    type: 'light',
    primary: {
      main: '#e58c8a'
    },
  },
})

const pages = [
  {
    label: 'Etusivu',
    to: '/',
    component: Home,
    icon: <FavoriteBorderIcon/>
  },
  {
    label: 'Aikataulu',
    to: '/aikataulu',
    component: Schedule,
    icon: <ScheduleIcon/>
  },
  {
    label: 'Lisäinfo',
    to: '/info',
    component: Info,
    icon: <InfoIcon/>
  },
  {
    label: 'Sijainti',
    to: '/sijainti',
    component: Map,
    icon: <RoomIcon/>
  },
  {
    label: 'Kuvat',
    to: '/kuvat',
    component: Gallery,
    icon: <PhotoCameraIcon/>
  },
/*  {
    label: 'Ilmoittaudu',
    to: '/ilmoittaudu',
    component: Register,
    icon: <PersonAddIcon/>
  }*/
]

const App = ({ classes }) => (
  <div className={ classes.root }>
    <Router>
      <GoogleAnalytics />
      <MuiThemeProvider theme={ theme }>
      <NavBar pages={pages} />
      <div className={ classes.content }>
        <Switch>
          {reverse(pages).map(page => (
            <Route
              key={page.label}
              path={page.to}
              component={page.component}
            />
          ))}
        </Switch>
      </div>
      </MuiThemeProvider>
    </Router>
  </div>
)

export default withStyles(styles)(App)
