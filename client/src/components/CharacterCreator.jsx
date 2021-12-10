import React, {useState, useContext} from 'react';
import Portrait from './Portrait.jsx';
import BottomCreator from './creators/BottomCreator.jsx';
import TopCreator from './creators/TopCreator.jsx';
import CreateBody from './body/CreateBody.jsx';
import CategoryMenus from './CategoryMenus.jsx';
import GarmentContext from './../context.js';
import defaults from './../defaults-samples/defaults.js';
import data from './../defaults-samples/sample-data.js';

//CharacterCreator Component: top level component that contains Portrait, CategoryMenues and Garment Creator
//provides context to child components
var convert = (target) => target;//JSON.parse(JSON.stringify(target));
function CharacterCreator() {
  const [top, setTop] = useState(convert(defaults.defaultTop));
  const [collar, setCollar] = useState(convert(defaults.defaultCollar));
  const [body, setBody] = useState(convert(defaults.defaultBody));
  const [bottom, setBottom] = useState(convert(defaults.defaultBottom));
  const [feet, setFeet] = useState(convert(defaults.defaultFeet));
  const [hair, setHair] = useState(convert(defaults.defaultHair));
  const [sleeves, setSleeves] = useState(convert(defaults.defaultSleeves));
  const [currentType, setCurrentType] = useState('top');
  // console.log('testing connection', bottom);
  return (
    <div className="character-creator">
      <div className="banner title-log">
        <h1 >Character Creator</h1>
      </div>
      <GarmentContext.Provider
        value={{top, setTop, body, setBody, sleeves, setSleeves, hair, setHair, bottom, setBottom, feet, setFeet, collar, setCollar, data}}>
        <Portrait/>
        <CategoryMenus currentType={currentType} setCurrentType={setCurrentType}/>
        {currentType === 'top' && <TopCreator/>}
        {currentType === 'bottom' && <BottomCreator/>}
        {/* {currentType === 'body' && <CreateBody body={body} setBody={setBody} />} */}
      </GarmentContext.Provider>
    </div>
  )
}
export default CharacterCreator;

