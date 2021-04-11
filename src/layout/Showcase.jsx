import React from "react";
import {
  showcaseIntro,
  showcaseItem,
  introItalic
} from "../constants/constants";
import { makeStyles } from "@material-ui/core/styles";
import ShowcaseCard from "../components/ShowcaseCard";
import WhiteSpace from "../shared/WhiteSpace";
import RapsodieTitle from "../components/RapsodieTitle";
import RapsodieGradient from "../components/RapsodieGradient";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.25rem",
    fontFamily: "Barlow",
    width: "100%",
    marginTop: "120px"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70%"
  },
  showcaseContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }
});

function Showcase(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.showcaseContainer}>
        {showcaseItem.map(item => {
          return <ShowcaseCard data={item} />;
        })}
      </div>
    </div>
  );
}

export default Showcase;
