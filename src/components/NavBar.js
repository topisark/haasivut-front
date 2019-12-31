import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/Favorite'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { Link } from 'react-router-dom'

const links = [
  {
    label: 'Etusivu',
    to: '/',
    icon: <FavoriteBorderIcon />
  },
  {
    label: 'Ilmoittaudu',
    to: '/ilmoittaudu',
    icon: <PersonAddIcon />
  }
]

const NavBar = () => {

  const [ selectedPage, setSelectedPage ] = useState(0)

  return (
    <Paper>
      <BottomNavigation
        value={ selectedPage }
        onChange={(event, newValue) => setSelectedPage(newValue)}
        showLabels
      >
        { links.map(link => (
          <BottomNavigationAction
            key={link.label}
            component={ Link }
            {...link}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default NavBar