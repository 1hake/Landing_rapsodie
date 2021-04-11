import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grow } from "@material-ui/core";
// import "../App.css";

const useStyles = makeStyles({
  container: {
    transition: "0.1s ease",
    width: "70%",
    fontSize: "1.25rem",
    fontFamily: "Barlow",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Rimage: {
    height: "70px",
    marginRight: "-20px",
    marginTop: "-30px",
    transition: "0.1s ease"
  },
  Simage: {
    height: "70px",
    marginLeft: "-10px",
    marginBottom: "-30px"
  },
  title: {
    fontSize: "1.7em",
    fontWeight: "bold",
    transition: "0.1s ease"
  }
});

function RapsodieTitle(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        className={classes.Rimage}
        src={require("../assets/img/rWhite.png")}
        alt=""
      />
      <p className={classes.title}>Rap X Data</p>
      <img
        className={classes.Simage}
        src={require("../assets/img/sWhite.png")}
        alt=""
      />
    </div>
  );
}

export default RapsodieTitle;
