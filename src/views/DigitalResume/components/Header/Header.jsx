import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SaveAltTwoTone from '@material-ui/icons/SaveAltTwoTone'
import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button color="secondary">
        {/* <Typography
          gutterBottom
          color="secondary"
          align="center"
          variant="subtitle1"
        > */}
        <b>
          <SaveAltTwoTone fontSize="large" />
        </b>
        {/* </Typography> */}
      </Button>
    </div>
  )
}

export default Header
