// import React from "react";
// import Item from "./../components/Item.jsx";
// import BodyPart from "./../components/body/BodyPart.jsx";
// import defaults from "./defaults.js";
// import colors from "./colors.js";
// const { white } = colors;
// var body = defaults.defaultBody;
// var previewFunctions = {
//   clothingPreviews: {
//     itemPreview: (handleOnClickEvent, displayClass) => {
//       //console.log(handleOnClickEvent);
//       return (items) => (
//         <Item
//           itemProfile={item}
//           zCounter={500}
//           displayClass={displayClass}
//           onClickEvent={() => {
//             handleOnClickEvent(item);
//           }}
//         />
//       );
//     },
//   },
//   bodyPreviews: {
//     facePreviewAtType: (type, filterSet) => {
//       return (handleOnClickEvent) => {
//         return (facePart) => (
//           <div className="preview-head-container">
//             <BodyPart
//               filterSet={filterSet}
//               part={body.backArm}
//               zCounter={120}
//               displayClass="preview-head back-arm"
//             />
//             <BodyPart
//               filterSet={filterSet}
//               part={body.torsoLegs}
//               zCounter={140}
//               displayClass="preview-head torso-legs"
//             />
//             <BodyPart
//               filterSet={filterSet}
//               part={body.frontArm}
//               zCounter={180}
//               displayClass="preview-head front-arm"
//             />
//             <BodyPart
//               filterSet={filterSet}
//               part={type !== "head" ? body.head : facePart}
//               zCounter={160}
//               displayClass="preview-head head"
//             />
//             <BodyPart
//               filterSet={filterSet}
//               part={body.ear}
//               zCounter={200}
//               displayClass="preview-head ear"
//             />
//           </div>
//         );
//       };
//     },
//   },
// };
// export default previewFunctions;
