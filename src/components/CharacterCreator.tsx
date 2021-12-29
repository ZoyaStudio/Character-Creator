/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState /* useMemo */ } from 'react';
import Portrait from './Portrait';
import BottomCreator from './creators/BottomCreator';
import TopCreator from './creators/TopCreator';
import CategoryMenus from './CategoryMenus';
import GarmentContext from '../context';
import { defaultGarments, defaultBody, defaultHair} from '../utility/defaults';
import {Garment, Body, Hair} from '../utility/types'
import {garmentProfiles, bodyProfiles, hairProfiles} from '../utility/sample-data';

// CharacterCreator Component: top level component that contains Portrait,
// CategoryMenues and Garment Creator
// provides context to child components
const convert = (target: Garment | Body | Hair) : (Garment | Body | Hair) => JSON.parse(JSON.stringify(target));
const CharacterCreator = function CharacterCreator() {
  const [top, setTop] = useState(convert(defaultGarments.defaultTop));
  const [collar, setCollar] = useState(convert(defaultGarments.defaultCollar));
  const [body, setBody] = useState(convert(defaultBody));
  const [bottom, setBottom] = useState(convert(defaultGarments.defaultBottom));
  const [feet, setFeet] = useState(convert(defaultGarments.defaultFeet));
  const [hair, setHair] = useState(convert(defaultHair));
  const [sleeves, setSleeves] = useState(convert(defaultGarments.defaultSleeves));
  const [currentType, setCurrentType] = useState('top');
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
            garmentProfiles,
            bodyProfiles,
            hairProfiles
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
        {currentType === 'top' && <TopCreator />}
        {currentType === 'bottom' && <BottomCreator />}
        {/* {currentType === 'body' && <CreateBody body={body} setBody={setBody} />} */}
      </GarmentContext.Provider>
    </div>
  );
};
export default CharacterCreator;
