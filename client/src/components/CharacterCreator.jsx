import React, {useState, useContext} from 'react';
import Portrait from './Portrait.jsx';
import TopPanels from './TopPanels.jsx';
import BottomCreator from './BottomCreator.jsx';
import CreateBody from './body/CreateBody.jsx';
import CategoryMenus from './CategoryMenus.jsx';
import GarmentContext from './../context.js';
import defaults from './../defaults-samples/defaults.js';

//CharacterCreator Component: top level component that contains Portrait, CategoryMenues and Garment Creator
//provides context to child components
var convert = (target) => target;//JSON.parse(JSON.stringify(target));
function CharacterCreator() {
  const [top, setTop] = useState(convert(defaults.defaultTop));
  const [body, setBody] = useState(convert(defaults.defaultBody));
  const [bottom, setBottom] = useState(convert(defaults.defaultBottom));
  const [feet, setFeet] = useState(convert(defaults.defaultFeet));
  const [hair, setHair] = useState(convert(defaults.defaultHair));
  const [sleeves, setSleeves] = useState(convert(defaults.defaultSleeves));
  const [currentType, setCurrentType] = useState('top');
  console.log('testing connection', bottom.base);
  return (
    <div className="character-creator">
      <h1 >Character Creator</h1>
      <GarmentContext.Provider
        value={{top, setTop, body, setBody, sleeves, setSleeves, hair, setHair, bottom, setBottom, feet, setFeet}}>
        <Portrait/>
        <CategoryMenus currentType={currentType} setCurrentType={setCurrentType}/>
        {/* {currentType === 'top' && <TopPanels/>} */}
        {currentType === 'top' && <BottomCreator/>}
        {currentType === 'body' && <CreateBody body={body} setBody={setBody} />}
      </GarmentContext.Provider>
    </div>
  )
}
export default CharacterCreator;

