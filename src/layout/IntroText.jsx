import React from "react";
import { intro, introSecondText } from "../constants/constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "70%",
    fontSize: "1.25rem",
    fontFamily: "Barlow"
  }
});

function IntroText(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>{intro}</p>
      <p>{introSecondText}</p>
    </div>
  );
}

export default IntroText;
