
import React, {useState, useContext} from 'react';

function Gallery({children, label}) {
  var previews = children.map((child, index )=>
    (
    <div className="preview-container" key={index + 'gallary'}>
     {child}
    </div>
    ));
  return (
    <div className="gallary">
    <div className="banner">
    <h3>{label}</h3>
    </div>
    <div className="gallary-box">
       {/* {previews} */}
       {children}
    </div>
    </div>
  )
}
export default Gallery;