import './P5app.css';
import Sketch from 'react-p5';
import * as ml5 from 'ml5' ; 
// import * as ml5 from 'ml5';

import p5Types from "p5";

export default () => {
  let video: p5Types.Element;
  let posenet: ml5.PoseNet;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.screen.availWidth, window.screen.availHeight).parent(canvasParentRef);
    video = p5.createCapture(p5.VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
  }

  const modelLoaded = () => {
    console.log('model loaded');
    // alert('model loaded' ) ;
  }

  const draw = (p5: p5Types) => {
    p5.image(video, 0, 0);
  }

  return <Sketch setup={setup} draw={draw} />;
}

// import './P5app.css';
// import Sketch from 'react-p5';
// import * as ml5 from 'ml5'

// import p5Types from "p5";



// export default () => {
    
//     let video ; 
//     let posenet ; 
    
//     const setup = (p5: p5Types, canvasParentRef: Element) =>{
//         p5.createCanvas(window.screen.availWidth , window.screen.availHeight ).parent(canvasParentRef);
//         video = p5.createCapture(p5.VIDEO);
//         video.hide();
//         posenet = ml5.poseNet(video , modelLoaded ) ;
        
//     }

//     const modelLoaded = () =>{
//         console.log('model loaded')
//     }

//     const draw = (p5: p5Types) =>{
//         p5.image(video , 0 , 0 );
//     }

//     return <Sketch setup={setup} draw={draw} ></Sketch>
// }