import React, { Component } from "react";
import LocalImage from "./assets/CUTE.jpg"; // Updated path and name

class PictureGallery extends Component {
  render() {
    return (
      <div>
        <h2>Image Showcase</h2>

        <h3>Picture from Public Folder:</h3>
        <img src="/public/images/kuromi_skull.png" alt="Public" width="300" />

        <h3>Picture from Local Source:</h3>
        <img src={LocalImage} alt="Local" width="300" />
      </div>
    );
  }
}

export default PictureGallery;
