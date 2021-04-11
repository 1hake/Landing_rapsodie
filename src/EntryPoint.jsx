import React from "react";
import { Provider } from "react-redux";
import ScrollableLayout from "./layout/ScrollableLayout";
import store from "./reducer";

function EntryPoint(props) {
  return (
    <Provider store={store}>
      <ScrollableLayout />
    </Provider>
  );
}

export default EntryPoint;
