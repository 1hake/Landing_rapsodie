import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "500px",
    width: "280px",
    fontSize: "1.25rem",
    fontFamily: "Barlow",
    backgroundColor: "black",
    borderRadius: "25px",
    color: "white",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    border: "2px solid white"
  },
  imageContainer: {
    borderRadius: "25px",
    height: "200px",
    width: "280px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  },
  image: {
    height: "200px"
  },
  title: {
    textAlign: "center"
  }
});

function ShowcaseCard(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className={classes.container}>
      <div
        className={classes.imageContainer}
        style={{
          backgroundImage: "url(" + require("../assets/img/" + data.img) + ")",
          backgroundSize: "cover"
        }}
      ></div>
      <h1 className={classes.title}>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default ShowcaseCard;
