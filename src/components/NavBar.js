import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = ({ pages }) => {

  const [ selectedPage, setSelectedPage ] = useState(0)

  return (
    <Paper>
      <BottomNavigation
        value={ selectedPage }
        onChange={(event, newValue) => setSelectedPage(newValue)}
        showLabels
      >
        { pages.map(page => (
          <BottomNavigationAction
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

export default NavBar