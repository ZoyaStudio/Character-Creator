import React, { useContext } from 'react'
import ColorPicker from '../generic-creator-components/ColorPicker'
import { makeCopyHair, makeCopyBody } from '../../utility/helper-functions'
import { hairProfiles } from '../../utility/sample-data'
import {
    FilterTypes,
    HairTypes,
    Color,
    FilterPart,
    HairFilters,
} from '../../utility/types'

// import { Garment, GarmentProfile, Boundry, Color} from '../../utility/types';
import GarmentContext from '../../context'

const BodyDetailsBar = function (): JSX.Element {
    const { body, setBody, setHair, hair } = useContext(GarmentContext)

    const handleFilterChangeHair = (
        e: React.ChangeEvent<HTMLInputElement>,
        filterType: FilterTypes,
        part: FilterPart
    ): void => {
        const hairCopy = makeCopyHair(hair)

        hairCopy[part][filterType] = Number(e.target.value)
        setHair(hairCopy)
    }
    const handleFilterPresetClickHair = (
        color: Color,
        part: FilterPart
    ): void => {
        const hairCopy = makeCopyHair(hair)
        hairCopy[part] = color
        setHair(hairCopy)
    }
    const handleFilterChangeEye = (
        e: React.ChangeEvent<HTMLInputElement>,
        filterType: FilterTypes,
        filterKey: FilterPart
    ): void => {
        const bodyCopy = makeCopyBody(body)
        bodyCopy.eyes[filterKey][filterType] = Number(e.target.value)
        setBody(bodyCopy)
    }
    const handleFilterPresetClickEye = (
        color: Color,
        filterKey: FilterPart
    ): void => {
        const bodyCopy = makeCopyBody(body)
        bodyCopy.eyes[filterKey] = color
        setBody(bodyCopy)
    }
    const boundarySlider = (
        hairType: HairTypes,
        sliderLabel: string
    ): JSX.Element => {
        return (
            <>
                <label className="range-label" htmlFor={`${sliderLabel}-range`}>
                    {sliderLabel}
                </label>
                <input
                    disabled={
                        hairProfiles[hairType][hair[hairType].typeKey].length <
                        2
                    }
                    className="range-input"
                    type="range"
                    name={`${sliderLabel}-range`}
                    value={hair[hairType].index}
                    min="0"
                    max={
                        hairProfiles[hairType][hair[hairType].typeKey].length -
                        1
                    }
                    step="1"
                    onChange={(e) => {
                        console.log('type', typeof e.target.value)
                        const hairCopy = makeCopyHair(hair)
                        hairCopy[hairType].index = Number(e.target.value)
                        setHair(hairCopy)
                    }}
                />
            </>
        )
    }
    return (
        <div className="details-bar">
            <h4>Details</h4>
            {boundarySlider('bases', 'Hair Base Length')}
            <ColorPicker
                filter={hair.baseFilterA}
                part="baseFilterA"
                label="Hair Color Base"
                handleFilterChange={handleFilterChangeHair}
                handleFilterPresetClick={handleFilterPresetClickHair}
            />
            <ColorPicker
                filter={hair.tintFilter}
                part="tintFilter"
                label="Hair Color Tint"
                handleFilterChange={handleFilterChangeHair}
                handleFilterPresetClick={handleFilterPresetClickHair}
            />
            <hr />
            <ColorPicker
                filter={body.eyes.baseFilterA}
                part="baseFilterA"
                label="Eye Color"
                handleFilterChange={handleFilterChangeEye}
                handleFilterPresetClick={handleFilterPresetClickEye}
            />
        </div>
    )
}
export default BodyDetailsBar
