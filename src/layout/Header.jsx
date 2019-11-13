import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GlitchClip from "react-glitch-effect/core/Clip";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    height: "120px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: "100px"
  },
  logoSmall: {
    height: "100px",
    marginLeft: "10px"
  }
});

function Header(props) {
  const classes = useStyles();
  const isSmall = useMediaQuery({
    query: "(min-width: 770px)"
  });
  return (
    <div
      className={classes.root}
      style={{ justifyContent: isSmall ? "center" : "flex-start" }}
    >
      <GlitchClip>
        {isSmall ? (
          <img
            className={classes.logo}
            src={require("../assets/img/logo-tagline_blanc-1.svg")}
            alt=""
          />
        ) : (
          <img
            className={classes.logoSmall}
            src={require("../assets/img/logotype-tagline_blanc.svg")}
            alt=""
          />
        )}
      </GlitchClip>
    </div>
  );
}

export default Header;
