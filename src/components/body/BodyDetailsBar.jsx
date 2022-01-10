import {React, useContext} from 'react';
import ColorPicker from './../generic-creator-components/ColorPicker';
import {makeCopy} from '../../utility/helper-functions';
import {hairProfiles} from '../../utility/sample-data';

// import { Garment, GarmentProfile, Boundry, Color} from '../../utility/types';
import GarmentContext from '../../context';
type AppProps = {

}
// type FilterPart = 'baseFilter | baseFilterA | baseFilterB | baseFilterC | tintFilter'
// type AppProps = {
//   filter: Color,
//   label: string,
//   handleFilterChange: (e : React.ChangeEvent<HTMLInputElement>, filterType: 'hue'| 'sat' | 'op' | 'con' | 'brit', part: FilterPart) => void,
//   part : FilterPart,
//   handleFilterPresetClick:   (color: Color, part: FilterPart, newColor : string) => void,
// };
// export type Hair = {
//    hairFilter: Color,
//    hairTintFilter: Color,
//    base: HairObj,
//      }
const BodyDetailsBar = function (props: AppProps) {
   const {
      body, setBody, setHair, hair,
    } = useContext(GarmentContext);

   const handleFilterChangeHair = (e, filterType, part) => {
      const hairCopy = makeCopy(hair);

      hairCopy[part][filterType] = e.target.value;
      setHair(hairCopy)
   }
   const handleFilterPresetClickHair = (color, part) => {
      const hairCopy = makeCopy(hair);
      hairCopy[part] = color;
      setHair(hairCopy)
   }
   const handleFilterChangeEye = (e, filterType, part) => {
      const bodyCopy = makeCopy(body);
      bodyCopy.eyes[part][filterType] = e.target.value;
      setBody(bodyCopy)
   }
   const handleFilterPresetClickEye = (color, part) => {
      const bodyCopy = makeCopy(body);
      bodyCopy.eyes[part] = color;
      setBody(bodyCopy)
   }
   const boundarySlider = (
      hairType: string | null,
      sliderLabel: string,
    ) => {
       return (<>
        <label className="range-label" htmlFor={`${sliderLabel}-range`}>
          {sliderLabel}
        </label>
        <input
          disabled={hairProfiles[hairType][hair[hairType].typeKey].length < 2}
          className="range-input"
          type="range"
          name={`${sliderLabel}-range`}
          value={hair[hairType].index}
          min="0"
          max={hairProfiles[hairType][hair[hairType].typeKey].length - 1}
          step="1"
          onChange={(e) => {
             console.log('type', typeof e.target.value)
            const hairCopy = makeCopy(hair);
            hairCopy[hairType].index = Number(e.target.value);
            setHair(hairCopy);
          }}
        />
      </>)
    }
    ;
   return <div className="details-bar">
   <h4>Details</h4>
   {boundarySlider('bases', 'Hair Base Length')}
   <ColorPicker filter={hair.baseFilter} part="baseFilter" label="Hair Color Base" handleFilterChange={handleFilterChangeHair} handleFilterPresetClick={handleFilterPresetClickHair}/>
   <ColorPicker filter={hair.tintFilter} part="tintFilter" label="Hair Color Tint" handleFilterChange={handleFilterChangeHair} handleFilterPresetClick={handleFilterPresetClickHair}/>
   <hr />
   <ColorPicker filter={body.eyes.baseFilter} part="baseFilter" label="Eye Color" handleFilterChange={handleFilterChangeEye} handleFilterPresetClick={handleFilterPresetClickEye}/>
   </div>
};
export default BodyDetailsBar;
