import React from "react";
import GlitchClip from "react-glitch-effect/core/Clip";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles({
  logo: {
    height: "100px"
  }
});

function Logo(props) {
  const classes = useStyles();
  function scrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop - 120);
  }
  const ref = useSelector(state => state["le projet"] && state["le projet"]);

  const isLarge = useMediaQuery({
    query: "(min-width: 770px)"
  });
  return (
    <GlitchClip>
      <img
        className={classes.logo}
        onClick={() => scrollToRef(ref)}
        style={{ marginLeft: isLarge ? "0px" : "20px" }}
        src={
          isLarge
            ? require("../assets/img/logo-tagline_blanc-1.svg")
            : require("../assets/img/logotype-tagline_blanc.svg")
        }
        alt=""
      />
    </GlitchClip>
  );
}

export default Logo;
