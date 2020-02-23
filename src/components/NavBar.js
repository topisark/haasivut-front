import React, { useState } from 'react'
import { BottomNavigation, Button, BottomNavigationAction, Paper, Typography, withStyles, Menu } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import { isMobile } from '../utils'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  navigationRoot: {
    flex: 1,
    backgroundColor: 'white'
  },
  mobileMenuRoot: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navigationActionRoot: {
    color: '#7d797ad4'
  },
  header: {
    textDecoration: 'none',
    fontFamily: 'Caveat, cursive',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 5,
    '&:hover': {
      color: '#e58c8a'
    }
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuPaper: {
    marginTop: 21
  },
  menuButton: {
    display: 'flex',
    flex: 1,
  },
  menuButtonIcon: {
    paddingRight: 20,
    color: '#e58c8a73'
  }
})

const MobileMenu = withStyles(styles)(({ classes, pages }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const buttonIcon = open
    ? <CloseIcon />
    : <MenuIcon />

  return (
    <div className={classes.mobileMenuRoot}>
      <Button onClick={handleClick}>
        {buttonIcon}
      </Button>
      <Menu
        classes={{ list: classes.menuList, paper: classes.menuPaper }}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {pages.map(page => (
          <Button
            key={`mobileMenu-${page.label}`}
            component={Link}
            to={page.to}
            onClick={handleClose}
          >
            <div className={classes.menuButton}>
              <span className={classes.menuButtonIcon}>
                {page.icon}
              </span>
              {page.label}
            </div>
          </Button>
        ))}
      </Menu>
    </div>
  )
})

const NavBar = ({ classes, pages, location }) => {
  const currentPath = location.pathname

  return (
    <Paper id="navbar-root" className={classes.root}>
      <Typography component={Link} to="/" className={classes.header} color="textPrimary">
        Anniina & Topi
      </Typography>
      { isMobile() &&
        <MobileMenu pages={pages} />
      }
      { !isMobile() &&
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
      }
    </Paper>
  )
}

export default withStyles(styles)(withRouter(NavBar))