import React from 'react'
import { BottomNavigation, BottomNavigationAction, Paper, Typography, withStyles } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  navigationRoot: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigationActionRoot: {
    color: '#7d797ad4'
  },
  header: {
    fontFamily: 'Caveat, cursive',
    fontSize: 20,
    paddingLeft: 20,
  },
})

const NavBar = ({ classes, pages, location }) => {
  const currentPath = location.pathname

  return (
    <Paper id="navbar-root" className={classes.root}>
      <Typography className={classes.header} color="textPrimary">
        Anniina & Topi
      </Typography>
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