import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, SCANDIWEB </h1>
        <ImageSlider slides = {SliderData}></ImageSlider>
      </div>
    );
  }
}

export default hot(module)(App);