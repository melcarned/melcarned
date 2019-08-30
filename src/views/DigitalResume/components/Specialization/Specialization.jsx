import React from 'react'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {},
  specializations: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'spacing-between',
    marginBottom: '2em',
  },
  specialization: {
    marginTop: '1em',
    marginBottom: '0.5em',
    display: 'flex',
    justifyContent: 'spacing-between',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    marginRight: '0.5em',
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
          return (
            <div className={classes.specialization}>
              <Avatar size="xs" className={classes.icon}>
                MB
              </Avatar>
              <Typography gutterBottom variant="body1">
                {specializationDetails.name}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Specialization

const SPECIALIZATION_DATA = [
  {
    name: 'ES6+',
    // icon: require(`${toolkitPath}ES6.svg`),
    link: 'http://es6-features.org/',
  },
  {
    name: 'React',
    // icon: require(`${toolkitPath}React.svg`),
    link: 'https://reactjs.org/',
  },
  {
    name: 'TypeScript',
    //     icon: require(`${toolkitPath}Visual_Code_Studio.svg`),
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'HTML5',
    //  icon: require(`${toolkitPath}HTML5.svg`),
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    name: 'CSS3',
    //     icon: require(`${toolkitPath}CSS3.svg`),
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
  },
  {
    name: 'Git',
    //    icon: require(`${toolkitPath}GitHub.svg`),
    link: 'https://github.com/',
  },
  {
    name: 'Progressive Web Apps',
    //      icon: require(`${toolkitPath}Pen_And_Paper.svg`),
    link:
      'https://uxplanet.org/the-art-of-ux-sketching-and-paper-prototyping-5dae5a1efc7d',
  },
  {
    name: 'Firebase',
    //    icon: require(`${toolkitPath}Firebase.svg`),
    link: 'https://firebase.google.com/',
  },
]
