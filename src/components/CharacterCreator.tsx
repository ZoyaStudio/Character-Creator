/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState /* useMemo */ } from 'react'
import Portrait from './Portrait'
import BottomCreator from './creators/BottomCreator'
import TopCreator from './creators/TopCreator'
import BodyCreator from './body/BodyCreator'
import CategoryMenus from './CategoryMenus'
import GarmentContext from '../context'
import { defaultGarments, defaultBody, defaultHair } from '../utility/defaults'
import { Garment, Body, Hair } from '../utility/types'
import {
    garmentProfiles,
    bodyProfiles,
    hairProfiles,
} from '../utility/sample-data'

// CharacterCreator Component: top level component that contains Portrait,
// CategoryMenues and Garment Creator
// provides context to child components
const convert = (target: Garment | Body | Hair): Garment | Body | Hair =>
    JSON.parse(JSON.stringify(target))
const CharacterCreator = function CharacterCreator(): JSX.Element {
    const [top, setTop] = useState(convert(defaultGarments.defaultTop))
    const [top2, setTop2] = useState(convert(defaultGarments.defaultTop2))
    const [top3, setTop3] = useState(convert(defaultGarments.defaultTop3))
    const [collar, setCollar] = useState(convert(defaultGarments.defaultCollar))
    const [collar2, setCollar2] = useState(
        convert(defaultGarments.defaultCollar2)
    )
    const [collar3, setCollar3] = useState(
        convert(defaultGarments.defaultCollar3)
    )
    const [body, setBody] = useState(convert(defaultBody))
    const [bottom, setBottom] = useState(convert(defaultGarments.defaultBottom))
    const [bottom2, setBottom2] = useState(
        convert(defaultGarments.defaultBottom2)
    )
    const [bottom3, setBottom3] = useState(
        convert(defaultGarments.defaultBottom3)
    )
    const [feet, setFeet] = useState(convert(defaultGarments.defaultFeet))
    const [feet2, setFeet2] = useState(convert(defaultGarments.defaultFeet2))
    const [feet3, setFeet3] = useState(convert(defaultGarments.defaultFeet3))
    const [hair, setHair] = useState(convert(defaultHair))
    const [sleeves, setSleeves] = useState(
        convert(defaultGarments.defaultSleeves)
    )
    const [sleeves2, setSleeves2] = useState(
        convert(defaultGarments.defaultSleeves2)
    )
    const [sleeves3, setSleeves3] = useState(
        convert(defaultGarments.defaultSleeves3)
    )
    const [currentType, setCurrentType] = useState('top')
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
                        top2,
                        setTop2,
                        top3,
                        setTop3,
                        body,
                        setBody,
                        sleeves,
                        setSleeves,
                        sleeves2,
                        setSleeves2,
                        sleeves3,
                        setSleeves3,
                        hair,
                        setHair,
                        bottom,
                        setBottom,
                        bottom2,
                        setBottom2,
                        bottom3,
                        setBottom3,
                        feet,
                        setFeet,
                        feet2,
                        setFeet2,
                        feet3,
                        setFeet3,
                        collar,
                        setCollar,
                        collar2,
                        setCollar2,
                        collar3,
                        setCollar3,
                        garmentProfiles,
                        bodyProfiles,
                        hairProfiles,
                    }
                }
            >
                <Portrait />
                <CategoryMenus
                    currentType={currentType}
                    setCurrentType={setCurrentType}
                />
                {currentType === 'top' && <TopCreator />}
                {currentType === 'bottom' && <BottomCreator />}
                {currentType === 'body' && <BodyCreator />}
                {/* {currentType === 'body' && <CreateBody body={body} setBody={setBody} />} */}
            </GarmentContext.Provider>
        </div>
    )
}
export default CharacterCreator
