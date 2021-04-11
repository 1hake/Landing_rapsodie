import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import WhiteSpace from "../shared/WhiteSpace";
import RapsodieGradient from "../components/RapsodieGradient";
import { introItalic } from "../constants/constants";

const useStyles = makeStyles({
  root: {
    minHeight: window.innerHeight - 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: props => props.backgroundColor
  },
  intro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  introText: {
    fontStyle: "italic",
    fontFamily: "Barlow",
    fontWeight: "bold",
    fontSize: "1.2em",
    color: props => props.introColor
  }
});

function Page(props) {
  const classes = useStyles(props);
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const storeRef = ref =>
    dispatch({ type: "STORE_REF", ref: myRef, name: props.name });
  useEffect(() => {
    storeRef(myRef);
  });
  return (
    <div ref={myRef} className={classes.root}>
      <div className={classes.intro}>
        <WhiteSpace />
        <RapsodieGradient text={props.name} color={props.titleColor} />
        <WhiteSpace />
        <p className={classes.introText}>{introItalic}</p>
      </div>
      {props.children}
    </div>
  );
}

export default Page;
