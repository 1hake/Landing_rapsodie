import React from "react";
import RapsodieGradient from "../components/RapsodieGradient";
import {
  introItalic,
  firstColumn,
  secondColumn,
  outro
} from "../constants/constants";
import { makeStyles } from "@material-ui/core/styles";
import WhiteSpace from "../shared/WhiteSpace";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    width: "80%",
    fontFamily: "Barlow",
    fontSize: "1.5em"
  },
  intro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  introText: {
    fontStyle: "italic",
    fontSize: "1em"
  },
  body: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  column: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "10px",
    minWidth: "550px",
    minHeight: "232px"
  },
  outro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    width: "70%"
  }
});

function Project(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.column}>
          <div dangerouslySetInnerHTML={{ __html: firstColumn.top }} />
        </div>
        <div className={classes.column}>
          <div dangerouslySetInnerHTML={{ __html: secondColumn.top }} />
        </div>
      </div>
      <WhiteSpace />
      <div
        dangerouslySetInnerHTML={{ __html: outro }}
        className={classes.outro}
      />
      <WhiteSpace size={"bigHeight"} />
    </div>
  );
}

export default Project;
