import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { withStyles, MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import Home from './pages/home'
import Register from './pages/register'

const styles = theme => ({
  root: {
    height: '100%',
  },
  content: {
    padding: theme.spacing()
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e58c8a'
    },
  },
})

function App({ classes }) {
  return (
    <div className={ classes.root }>
      <Router>
        <MuiThemeProvider theme={ theme }>
          <NavBar/>
          <div className={ classes.content }>
            <Switch>
              <Route path="/ilmoittaudu">
                <Register/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    </div>
  )
}

export default withStyles(styles)(App)
