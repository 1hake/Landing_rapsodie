import React, { useRef } from "react";
import Page from "./Page";
import Header from "react-fullpage/dist/Header";
import MyHeader from "./MyHeader";
import IntroText from "./IntroText";
import Showcase from "./Showcase";
import RapsodieTitle from "../components/RapsodieTitle";
import Project from "./Project";
import MediaDisplay from "./Media";

// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function ScrollableLayout(props) {
  return (
    <div>
      <MyHeader />
      <Page
        introColor={"white"}
        name={"le projet"}
        titleColor={"#00FFBE"}
        backgroundColor={"#0d0c0a"}
      >
        {/* <IntroText /> */}
        <Project />
      </Page>
      <Page
        introColor={"black"}
        name={"le lab"}
        titleColor={"#453df5"}
        backgroundColor={"white"}
      >
        <Showcase />
      </Page>
      <Page
        introColor={"white"}
        name={"les medias"}
        titleColor={"#ffef51"}
        backgroundColor={"#0d0c0a"}
      >
        <MediaDisplay />
      </Page>
    </div>
  );
}

export default ScrollableLayout;
