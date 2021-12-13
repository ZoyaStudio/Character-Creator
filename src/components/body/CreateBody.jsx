// import React, { useState, useContext } from "react";
// import GenericPanels from "../GenericPanels.jsx";
// import previewFunctions from "../../defaults-samples/preview-functions.jsx";
// import BodySideBar from "./BodySideBar.jsx";
// import SavedBodiesSideBar from "./SavedBodiesSideBar.jsx";
// import defaults from "../../defaults-samples/defaults.js";
// import data from "../../defaults-samples/sample-data.js";

// const { bodies } = data;
// const { facePreviewAtType } = previewFunctions.bodyPreviews;

// const CreateBody = function ({ setBody, body }) {
//   const [savedBodies, setSavedBodies] = [];
//   const handleOnClickFunctionCreator = (type) => {
//     return (info) => {
//       const currentBodyCopy = JSON.parse(JSON.stringify(body));
//       currentBodyCopy[type] = JSON.parse(JSON.stringify(info));
//       setBody(currentBodyCopy);
//     };
//   };

//   const {
//     heads,
//     ears,
//     eyebrows,
//     eyes,
//     noses,
//     mouths,
//     frontArms,
//     backArms,
//     torsoLegs,
//   } = bodies;
//   const tabProfiles = {
//     Body: {
//       list: [
//         {
//           label: "Eyes",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//         {
//           label: "Eyebrows",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//         {
//           label: "Ears",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//         {
//           label: "Nose",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//         {
//           label: "Mouth",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//         {
//           label: "Detail",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//         // wings
//         // tails
//       ],
//       detailBar: (
//         <BodySideBar
//           body={body}
//           setBody={setBody}
//           setSavedBodies={setSavedBodies}
//         />
//       ),
//     },
//     "Saved Bodies": {
//       list: [
//         // TO DO: set up for previewing full body
//         {
//           label: "Saved Bodies",
//           items: Object.values(heads),
//           onClickHandler: handleOnClickFunctionCreator("head"),
//           previewFunction: facePreviewAtType("head", body.filterSet),
//         },
//       ],
//       detailBar: <SavedBodiesSideBar body={body} setBody={setBody} />,
//     },
//   };

//   return <GenericPanels tabProfiles={tabProfiles} />;
// };
// export default CreateBody;
