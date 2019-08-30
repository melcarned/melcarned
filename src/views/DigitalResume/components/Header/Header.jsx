import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Brightness1 from '@material-ui/icons/Brightness1'
import Brightness2 from '@material-ui/icons/Brightness2'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <SaveAlt />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <div>
        <Brightness1 />
        <Switch
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Brightness2 />
      </div>
    </div>
  )
}

export default Header
