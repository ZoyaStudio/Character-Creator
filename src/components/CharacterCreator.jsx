/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState /* useMemo */ } from "react";
import Portrait from "./Portrait";
import BottomCreator from "./creators/BottomCreator";
import TopCreator from "./creators/TopCreator";
import CategoryMenus from "./CategoryMenus";
import GarmentContext from "../context";
import defaults from "../defaults-samples/defaults";
import data from "../defaults-samples/sample-data";

// CharacterCreator Component: top level component that contains Portrait, CategoryMenues and Garment Creator
// provides context to child components
const convert = (target) => target; // JSON.parse(JSON.stringify(target));
const CharacterCreator = function characterCreator() {
  const [top, setTop] = useState(convert(defaults.defaultTop));
  const [collar, setCollar] = useState(convert(defaults.defaultCollar));
  const [body, setBody] = useState(convert(defaults.defaultBody));
  const [bottom, setBottom] = useState(convert(defaults.defaultBottom));
  const [feet, setFeet] = useState(convert(defaults.defaultFeet));
  const [hair, setHair] = useState(convert(defaults.defaultHair));
  const [sleeves, setSleeves] = useState(convert(defaults.defaultSleeves));
  const [currentType, setCurrentType] = useState("top");
  // console.log('testing connection', bottom);
  return (
    <div className="character-creator">
      <div className="banner title-log">
        <h1>Character Creator</h1>
      </div>

      {/* const foo = useMemo(() => ({foo: 'bar'}), []); */}
      <GarmentContext.Provider
        value={
          // useMemo(
          // () => (
          {
            top,
            setTop,
            body,
            setBody,
            sleeves,
            setSleeves,
            hair,
            setHair,
            bottom,
            setBottom,
            feet,
            setFeet,
            collar,
            setCollar,
            data,
          }
          //   ),
          //   []
          // )
        }
      >
        <Portrait />
        <CategoryMenus
          currentType={currentType}
          setCurrentType={setCurrentType}
        />
        {currentType === "top" && <TopCreator />}
        {currentType === "bottom" && <BottomCreator />}
        {/* {currentType === 'body' && <CreateBody body={body} setBody={setBody} />} */}
      </GarmentContext.Provider>
    </div>
  );
};
export default CharacterCreator;
