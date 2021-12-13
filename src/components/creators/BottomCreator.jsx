import React, { useState, useContext } from "react";
import GenericCreator from "../generic-creator-components/GenericCreator";
import GarmentContext from "../../context";
import data from "../../defaults-samples/sample-data";

const BottomCreator = function bottomCreator() {
  const { bottom, setBottom, feet, setFeet } = useContext(GarmentContext);
  const [savedBottoms, setSavedBottoms] = useState([]);
  return (
    <GenericCreator
      tabItems={[
        {
          label: "Pants",
          item: bottom,
          itemSetter: setBottom,
          savedItems: savedBottoms,
          setSavedItems: setSavedBottoms,
          data: data.bottoms,
          dataDefaultBase: data.bottoms.skinTight,
          required: true,
          previewClass: "preview-bottom",
        },
        {
          label: "Footware",
          item: feet,
          itemSetter: setFeet,
          savedItems: savedBottoms,
          setSavedItems: setSavedBottoms,
          data: data.feets,
          dataDefaultBase: data.feets.skinTight,
          required: false, // true,
          previewClass: "preview-feet",
        },
      ]}
    />
  );
};
export default BottomCreator;
