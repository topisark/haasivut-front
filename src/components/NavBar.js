import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
  navigationRoot: {
    backgroundColor: 'white'
  },
  navigationActionRoot: {
    color: '#7d797ad4'
  }
})

const NavBar = ({ classes, pages }) => {

  // Keeping this as kind of a hack to get component to refresh when path changes
  // eslint-disable-next-line no-unused-vars
  const [ selectedPage, setSelectedPage ] = useState(0)

  const currentPath = window.location.pathname

  return (
    <Paper id="navbar-root">
      <BottomNavigation
        classes={{ root: classes.navigationRoot }}
        value={ currentPath }
        onChange={(event, newValue) => setSelectedPage(newValue)}
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

export default withStyles(styles)(NavBar)