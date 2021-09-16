import React from "react";
//import placeholder from "./placeholder.svg";
import "./AlbumItem.css";

const AlbumItem = ({ album }) => (
  <li className="album-item">
    <img alt={album.thumbnailUrl} src={album.url}></img>
    <h3>{album.title}</h3>
  </li>
);

export default AlbumItem;
