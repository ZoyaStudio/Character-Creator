
import React, {useState, useContext} from 'react';

// function Sample() {
//   return (
//     <div className="preview-container">
//   {/* <img src="./base-flattened.png" className="preview-top"/> */}
//   <img src="/simpleTop-ShadingA.png" className="preview-top"/>
//   <img src="/simpleTop-GradientA.png" className="preview-top"/>
//   <img src="/simpleTop-Outline.png" className="preview-top"/>
//   </div>
//   )
// }

//Gallery: container for garment piece previews
//input:
  //children: array of Items
  //label: display label for gallery
function Gallery(props) {
  var previews = props.children.map((child, index )=>
    (
    <div className="preview-container" key={index + 'gallary'}>
     {child}
    </div>
    ));
  return (
    <div className="gallary">
    <h3>{props.label}</h3>
    <div className="gallary-box">
       {previews}
    </div>
    </div>
  )
}
export default Gallery;