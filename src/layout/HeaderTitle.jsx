import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import WhiteSpace from "../shared/WhiteSpace";
const useStyles = makeStyles({
  circle: {
    height: "10px",
    width: "10px",
    backgroundColor: props => props.color,
    borderRadius: "100%"
  },
  title: {
    color: "white",
    fontSize: "1em"
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

function HeaderTitle(props) {
  const classes = useStyles(props);
  function scrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop - 120);
  }
  const ref = useSelector(state => state[props.name]);
  console.log(ref);
  return (
    <div className={classes.root} onClick={() => scrollToRef(ref)}>
      <div className={classes.circle} />
      <WhiteSpace vertical />
      <h1 className={classes.title}>{props.text}</h1>
    </div>
  );
}

export default HeaderTitle;
