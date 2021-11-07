import React, {useState, useContext} from 'react';
import Portrait from './Portrait.jsx';
import TopPanels from './TopPanels.jsx';
import CreateBody from './body/CreateBody.jsx';
import CategoryMenus from './CategoryMenus.jsx';
import GarmentContext from './../context.js';
import defaults from './../defaults-samples/defaults.js';

//CharacterCreator Component: top level component that contains Portrait, CategoryMenues and Garment Creator
//provides context to child components
function CharacterCreator() {
  const [top, setTop] = useState(JSON.parse(JSON.stringify(defaults.defaultTop)));
  const [body, setBody] = useState(JSON.parse(JSON.stringify(defaults.defaultBody)));
  const [sleeves, setSleeves] = useState(JSON.parse(JSON.stringify(defaults.defaultSleeves)));
  const [currentType, setCurrentType] = useState('top');
  return (
    <div className="character-creator">
      <h1 >Character Creator</h1>
      <GarmentContext.Provider
        value={{top, setTop, body, setBody, sleeves, setSleeves}}>
        <Portrait/>
        <CategoryMenus currentType={currentType} setCurrentType={setCurrentType}/>
        {currentType === 'top' && <TopPanels/>}
        {currentType === 'body' && <CreateBody body={body} setBody={setBody}/>}
      </GarmentContext.Provider>
    </div>
  )
}
export default CharacterCreator;

