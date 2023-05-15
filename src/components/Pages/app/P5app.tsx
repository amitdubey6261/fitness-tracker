import './P5app.css';
import Sketch from 'react-p5';
import * as ml5 from 'ml5';

import p5Types from "p5";

export default () => {
  let video: p5Types.Element;
  let poseNet : any ; 
  let pose : any ; 

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.screen.availWidth, window.screen.availHeight).parent(canvasParentRef);
    video = p5.createCapture(p5.VIDEO);
    video.size(window.screen.availWidth , window.screen.availHeight);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
  }

  const modelLoaded = () => {
    poseNet.on('pose' , posedetected) ; 
  }

  const posedetected = (poses : any ) =>{
    if(poses.length > 0 ){
        pose = poses[0].pose ; 
    }
  }

  const draw = (p5: p5Types) => {
    p5.image(video, 0 , 0  , p5.width , p5.height );
    if(pose){
        for(let i = 0 ; i<pose.keypoints.length ; i++){
            let x = pose.keypoints[i].position.x ; 
            let y = pose.keypoints[i].position.y ;
            p5.fill( 0 , 255 , 0 );
            p5.ellipse( x , y , 16 , 16 ); 
        }
    }
  }

  return <Sketch setup={setup} draw={draw} />;
}
