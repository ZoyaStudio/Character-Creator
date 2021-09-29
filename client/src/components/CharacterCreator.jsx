import React, {useState, useContext} from 'react';
import Portrait from './Portrait.jsx';
import GarmentCreator from './GarmentCreator.jsx';
import CategoryMenus from './CategoryMenus.jsx';
import GarmentContext from './../context.js';
import defaults from './../defaults-samples/defaults.js';

//CharacterCreator Component: top level component that contains Portrait, CategoryMenues and Garment Creator
//provides context to child components
function CharacterCreator() {
  const [top, setTop] = useState(defaults.defaultTop);
  return (
    <div className="character-creator">
      <h1 >Character Creator</h1>
      <GarmentContext.Provider
        value={{top, setTop}}>
        <Portrait/>
        {/* <CategoryMenus/> */}
        <GarmentCreator top={top} setTop={setTop}/>
      </GarmentContext.Provider>
    </div>
  )
}
export default CharacterCreator;

