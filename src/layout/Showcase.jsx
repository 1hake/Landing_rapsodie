import React from "react";
import { showcaseIntro, showcaseItem } from "../constants/constants";
import { makeStyles } from "@material-ui/core/styles";
import ShowcaseCard from "../components/ShowcaseCard";
import WhiteSpace from "../shared/WhiteSpace";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.25rem",
    fontFamily: "Barlow",
    width: "100%"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
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
      <div className={classes.textContainer}>
        <h1>Showcase</h1>
        <p>{showcaseIntro}</p>
      </div>
      <WhiteSpace />
      <div className={classes.showcaseContainer}>
        {showcaseItem.map(item => {
          return <ShowcaseCard data={item} />;
        })}
      </div>
    </div>
  );
}

export default Showcase;
