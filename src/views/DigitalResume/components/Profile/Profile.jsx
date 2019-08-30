import React from 'react'
import { Avatar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SaveAlt from '@material-ui/icons/SaveAlt'
import SaveAltTwoTone from '@material-ui/icons/SaveAltTwoTone'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    marginRight: '1em',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  leftIcon: {
    marginRight: '0.5em',
  },
  button: {
    margin: '1em auto',
  },
})

function Profile() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <div>
          <Avatar className={classes.profilePicture}>DM</Avatar>
        </div>
        <div>
          <Typography gutterBottom variant="h4">
            Damiano Melcarne
          </Typography>
          <Typography color="secondary" variant="body1">
            <b>Software Engineer - Web UI</b>
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="subtitle1">
            New York, NY
          </Typography>
        </div>
      </div>
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

export default Profile

const PROFILE_DATA = {
  image: '',
  subHeader: 'Front-end',
  header: 'Toolkit',
  paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  display: [
    {
      name: 'React',
      // icon: require(`${toolkitPath}React.svg`),
      link: 'https://reactjs.org/',
    },
    {
      name: 'Redux',
      // icon: require(`${toolkitPath}Redux.svg`),
      link: 'https://redux.js.org/',
    },
    {
      name: 'ES6',
      // icon: require(`${toolkitPath}ES6.svg`),
      link: 'http://es6-features.org/',
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
      name: 'UI Libraries',
      //    icon: require(`${toolkitPath}Bootstrap.svg`),
      link: 'https://getbootstrap.com/',
    },
    {
      name: 'Firebase',
      //    icon: require(`${toolkitPath}Firebase.svg`),
      link: 'https://firebase.google.com/',
    },
    {
      name: 'GitHub',
      //    icon: require(`${toolkitPath}GitHub.svg`),
      link: 'https://github.com/',
    },
    {
      name: 'Trello',
      //    icon: require(`${toolkitPath}Trello.svg`),
      link: 'https://trello.com/home',
    },
    {
      name: 'Photoshop',
      //     icon: require(`${toolkitPath}Photoshop.svg`),
      link: 'https://www.adobe.com/products/photoshop.html',
    },
    {
      name: 'Visual Code Studio',
      //     icon: require(`${toolkitPath}Visual_Code_Studio.svg`),
      link: 'https://code.visualstudio.com/',
    },
    {
      name: 'Paper Prototyping',
      //      icon: require(`${toolkitPath}Pen_And_Paper.svg`),
      link:
        'https://uxplanet.org/the-art-of-ux-sketching-and-paper-prototyping-5dae5a1efc7d',
    },
  ],
}
