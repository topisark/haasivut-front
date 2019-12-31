import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [ selectedPage, setSelectedPage ] = useState(0)

  return (
    <Paper>
      <BottomNavigation
        value={ selectedPage }
        onChange={(event, newValue) => setSelectedPage(newValue)}
        showLabels
      >
        <BottomNavigationAction
          label="Etusivu"
          component={ Link }
          to="/"
        />
        <BottomNavigationAction
          label="Ilmoittaudu"
          component={ Link }
          to="/ilmoittaudu"
        />
      </BottomNavigation>
    </Paper>
  )
}

export default NavBar