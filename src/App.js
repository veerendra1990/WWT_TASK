import React from "react";
//import { hot } from "react-hot-loader";
import AlbumList from "./album/AlbumList";
import configureStore from "./store/configureStore";
import "./App.css";

const store = configureStore();

let albums = store.getState();

const App = () => (
  <div className="albums-app">
    <h1>React Interview Challenge</h1>
    <AlbumList albums={albums} />
  </div>
);

//export default hot(module)(App);
export default App;
