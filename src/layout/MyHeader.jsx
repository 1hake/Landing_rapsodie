import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GlitchClip from "react-glitch-effect/core/Clip";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import HeaderTitle from "./HeaderTitle";
import Logo from "./Logo";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    height: "120px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: "0"
  },
  logoSmall: {
    height: "100px",
    marginLeft: "10px"
  },
  headerTitle: {
    color: "white"
  },
  menuContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "120px",
    minWidth: "300px"
  }
});

function MyHeader(props) {
  const classes = useStyles();
  const isSmall = useMediaQuery({
    query: "(min-width: 770px)"
  });
  if (!isSmall) {
    return (
      <div className={classes.root} style={{ justifyContent: "space-between" }}>
        <Logo />
        <div className={classes.menuContainer}>
          <HeaderTitle name={"le lab"} color={"#453df5"} text={"Le Lab"} />
          <HeaderTitle name={"les medias"} color={"#ffef51"} text={"Medias"} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root} style={{ justifyContent: "center" }}>
        <HeaderTitle name={"le lab"} color={"#453df5"} text={"Le Lab"} />
        <Logo />
        <HeaderTitle name={"les medias"} color={"#ffef51"} text={"Medias"} />
      </div>
    );
  }
}

export default MyHeader;
