import React from 'react'
import { BottomNavigation, BottomNavigationAction, Paper, withStyles } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'

const styles = theme => ({
  navigationRoot: {
    backgroundColor: 'white'
  },
  navigationActionRoot: {
    color: '#7d797ad4'
  }
})

const NavBar = ({ classes, pages, location }) => {
  const currentPath = location.pathname

  return (
    <Paper id="navbar-root">
      <BottomNavigation
        classes={{ root: classes.navigationRoot }}
        value={ currentPath }
        showLabels
      >
        { pages.map(page => (
          <BottomNavigationAction
            { ...page }
            classes={{ root: classes.navigationActionRoot }}
            key={page.label}
            component={Link}
            value={page.to}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default withStyles(styles)(withRouter(NavBar))