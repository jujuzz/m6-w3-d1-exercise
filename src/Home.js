import React from "react";
import BarChart from "./BarChart";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";
import Tree from "./Tree";
import data from "./data";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Example() {
    return (
      <Canvas width={400} height={400}>
        <Scene />
      </Canvas>
    );
  }
const App = () => {
    return <Tree data={data} width={400} height={400} />;
};

function Home() {
    return (
        <div>
            <BarChart style={{width:400, height:400}}/>
            <Example style={{width:400, height:400}}/>
            <App style={{width:400, height:400}}/>
        </div>
    );
}

export default Home;