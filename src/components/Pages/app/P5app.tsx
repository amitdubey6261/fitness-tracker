import './P5app.css';
import Sketch from 'react-p5';
import * as ml5 from 'ml5';

import p5Types from "p5";

export default () => {
  let video: p5Types.Element;
  let poseNet : Element ; 

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.screen.availWidth, window.screen.availHeight).parent(canvasParentRef);
    video = p5.createCapture(p5.VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
  }

  const modelLoaded = () => {
    console.log('model loaded');
  }

  const draw = (p5: p5Types) => {
    p5.image(video, 0, 0);
    console.log(poseNet)
  }

  return <Sketch setup={setup} draw={draw} />;
}
