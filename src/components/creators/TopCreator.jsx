import React, { useState, useContext } from "react";
import GenericCreator from "../generic-creator-components/GenericCreator";
import GarmentContext from "../../context";
import data from "../../defaults-samples/sample-data";

const TopCreator = function topCreator() {
  const { top, setTop, sleeves, setSleeves, collar, setCollar } =
    useContext(GarmentContext);
  const [savedTops, setSavedTops] = useState([]);
  return (
    <GenericCreator
      tabItems={[
        {
          label: "Bodices",
          item: top,
          itemSetter: setTop,
          savedItems: savedTops,
          setSavedItems: setSavedTops,
          data: data.tops,
          dataDefaultBase: data.tops.skinTight,
          required: true,
          previewClass: "preview-top",
        },
        {
          label: "Collars",
          item: collar,
          itemSetter: setCollar,
          savedItems: savedTops,
          setSavedItems: setSavedTops,
          data: data.collars,
          dataDefaultBase: data.collars.skinTight,
          required: false,
          previewClass: "preview-top",
        },
        {
          label: "Sleeves",
          item: sleeves,
          itemSetter: setSleeves,
          savedItems: savedTops,
          setSavedItems: setSavedTops,
          data: data.sleeves,
          dataDefaultBase: data.sleeves["Puff Sleeves"],
          required: false,
          previewClass: "preview-top",
        },
      ]}
    />
  );
};
export default TopCreator;
