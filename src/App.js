import React from "react";
import Header from "./layout/Header";
import { makeStyles } from "@material-ui/core/styles";
import IntroText from "./layout/IntroText";
import WhiteSpace from "./shared/WhiteSpace";
import Showcase from "./layout/Showcase";
import Contact from "./layout/Contact";
import RapsodieTitle from "./layout/RapsodieTitle";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0000ff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <WhiteSpace />
      <RapsodieTitle />
      <IntroText />
      <WhiteSpace />
      <Showcase />
      <WhiteSpace />
      <Contact />
      <WhiteSpace />
    </div>
  );
}

export default App;
