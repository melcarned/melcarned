import React from 'react'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {
  ES6Icon,
  ReactIcon,
  CSS3Icon,
  HTML5Icon,
  GitIcon,
  FirebaseIcon,
} from '../../../../assets/toolkit_icons'

const useStyles = makeStyles({
  root: {},
  specializations: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    marginBottom: '2em',
  },
  specialization: {
    marginTop: '1em',
    marginBottom: '0.5em',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '20%',
  },
  icon: {
    marginRight: '0.5em',
    width: '25px',
    height: '25px',
  },
})

function Specialization() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography gutterBottom color="secondary" variant="h6">
        <b>SKILLS</b>
      </Typography>
      <div className={classes.specializations}>
        {SPECIALIZATION_DATA.map(specializationDetails => {
          const { name, icon } = specializationDetails

          return (
            <div className={classes.specialization}>
              <div>
                <img className={classes.icon} src={icon} />
              </div>
              <Typography gutterBottom variant="body1">
                {name}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Specialization

const toolkitPath = '../../../../assets/toolkit_icons/'

const SPECIALIZATION_DATA = [
  {
    name: 'ES6+',
    icon: ES6Icon,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'TypeScript',
    icon: ReactIcon,
  },
  {
    name: 'HTML5',
    icon: HTML5Icon,
  },
  {
    name: 'CSS3',
    icon: CSS3Icon,
  },
  {
    name: 'Git',
    icon: GitIcon,
  },
  {
    name: 'Firebase',
    icon: FirebaseIcon,
  },
  {
    name: 'Progressive Web Apps',
    icon: FirebaseIcon,
  },
]
