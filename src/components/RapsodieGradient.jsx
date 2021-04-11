import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  block: {
    transition: "0.4s ease",
    backgroundColor: props => props.color,
    width: props => props.size,
    height: "35px",
    display: "flex",
    justifyContent: "flex-start"
  },
  blockClosed: {
    width: "0px",
    transition: "0.4s ease",
    backgroundColor: props => props.color,
    height: "35px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "black",
    marginTop: "-5px",
    position: "absolute"
  },
  container: {
    width: "10vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});

function RapsodieGradient(props) {
  const [isOpen, setIsOpen] = useState(false);
  const styled = { size: props.text.length * 20 + "px", color: props.color };
  const classes = useStyles(styled);
  setTimeout(function() {
    setIsOpen(!isOpen);
  }, 1000);
  return (
    <div className={classes.container}>
      <div className={isOpen ? classes.block : classes.blockClosed}>
        <p className={classes.title}>{props.text}</p>
      </div>
    </div>
  );
}

export default RapsodieGradient;
