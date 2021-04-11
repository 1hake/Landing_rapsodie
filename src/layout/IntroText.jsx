import React from "react";
import {
  intro,
  introSecondText,
  introItalic,
  outro,
  firstColumn,
  secondColumn
} from "../constants/constants";
import { makeStyles } from "@material-ui/core/styles";
import WhiteSpace from "../shared/WhiteSpace";
import RapsodieGradient from "../components/RapsodieGradient";

const useStyles = makeStyles({
  container: {
    width: "100%",
    fontSize: "1.5rem",
    fontFamily: "Barlow",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap"
  },
  textContainer: {
    width: "40vw",
    maxWidth: "575px",
    minWidth: "380px",
    minHeight: "380px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: " column",
    padding: "20px"
  },
  root: {
    width: "100%",
    fontSize: "1.7rem",
    fontFamily: "Barlow",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  outro: {
    maxWidth: "80%",
    textAlign: "center"
  },
  introItalic: { fontStyle: "italic", fontSize: "1rem" }
});

function Column(props) {
  const classes = useStyles();
  const obj = props.data;
  return (
    <div style={{}} className={classes.textContainer}>
      <div dangerouslySetInnerHTML={{ __html: obj.top }} />
      <WhiteSpace />
      <div dangerouslySetInnerHTML={{ __html: obj.bottom }} />
    </div>
  );
}

function IntroText(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WhiteSpace size={"bigHeight"} />
      <RapsodieGradient color={"#00FFBE"} text={"le projet"} />
      <WhiteSpace />
      <p className={classes.introItalic}>{introItalic}</p>
      <WhiteSpace />
      <div className={classes.container}>
        <Column data={firstColumn} />
        <Column data={secondColumn} />
      </div>
      <p className={classes.outro}>{outro}</p>
      <WhiteSpace />
    </div>
  );
}

export default IntroText;
