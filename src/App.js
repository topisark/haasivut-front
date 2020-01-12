import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { withStyles, MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import FavoriteBorderIcon from '@material-ui/icons/Favorite'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import RoomIcon from '@material-ui/icons/Room';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import NavBar from './components/NavBar'
import Home from './pages/home'
import Register from './pages/register'
import Map from './pages/map'
import { reverse } from './utils'

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
    type: 'dark',
    text: {
      primary: '#FFFFFF',
    },
    primary: {
      main: '#e58c8a'
    },
    secondary: {
      main: '#FFFFFF',
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
    label: 'Ilmoittaudu',
    to: '/ilmoittaudu',
    component: Register,
    icon: <PersonAddIcon/>
  },
  {
    label: 'Sijainti',
    to: '/sijainti',
    component: Map,
    icon: <RoomIcon/>
  },
  /*{
    label: 'Kuvat',
    to: '/Kuvat',
    component: Home,
    icon: <CameraAltIcon/>
  }*/
]

const App = ({ classes }) => (
  <div className={ classes.root }>
    <Router>
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
