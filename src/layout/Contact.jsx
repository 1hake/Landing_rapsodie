import React from "react";
import { contact } from "../constants/constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "70%",
    fontSize: "1.25rem",
    fontFamily: "Barlow",
    textAlign: "center"
  }
});

function Contact(props) {
  const classes = useStyles();
  return (
    <p className={classes.container}>
      {contact.text} <a href={contact.link}>{contact.linkText}</a>
    </p>
  );
}

export default Contact;
