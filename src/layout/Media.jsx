import React from "react";
import { mediasItem } from "../constants/constants";
import { makeStyles } from "@material-ui/styles";
import WhiteSpace from "../shared/WhiteSpace";

const useStyle = makeStyles({
  root: {
    color: "white",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "1.7em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  dot: {
    height: "20px",
    width: "20px",
    borderRadius: "100%",
    backgroundColor: "#ffef51"
  },
  text: {
    padding: "10px"
  }
});

function MediaDisplay(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {mediasItem.map((item, index) => {
        return (
          <>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
            <WhiteSpace />
            {index !== mediasItem.length - 1 && (
              <div className={classes.dot}></div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default MediaDisplay;
