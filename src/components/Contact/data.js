/* ----- Contact Data ----- */
import { linkedin, code, documentInverted } from "react-icons-kit/entypo/";

export default {
  info: {
    header: "Located in the East Village, NYC",
    email: "melcarned@gmail.com"
  },
  icons: [
    {
      icon: linkedin,
      target: "LinkedIn",
      link: "https://www.linkedin.com/in/melcarned/"
    },
    {
      icon: documentInverted,
      target: "Resume",
      link: require("../../assets/Damiano_Melcarne_Resume.pdf")
    },
    {
      icon: code,
      target: "Source",
      link: "https://github.com/melcarned/melcarned"
    }
  ],
  footer: {
    buttonText: "Download Resume",
    subtitle: "- Let's work together -",
    copyright: "melcarned.com"
  }
};
