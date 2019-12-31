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

  const [ selectedPage, setSelectedPage ] = useState(0)

  return (
    <Paper>
      <BottomNavigation
        classes={{ root: classes.navigationRoot }}
        value={ selectedPage }
        onChange={(event, newValue) => setSelectedPage(newValue)}
        showLabels
      >
        { pages.map(page => (
          <BottomNavigationAction
            classes={{ root: classes.navigationActionRoot }}
            key={page.label}
            component={Link}
            to={page.to}
            label={page.label}
            icon={page.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default withStyles(styles)(NavBar)