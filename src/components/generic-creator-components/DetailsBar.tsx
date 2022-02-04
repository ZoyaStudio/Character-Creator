import React from 'react'
import ColorPicker from './ColorPicker'
import { makeCopy } from '../../utility/helper-functions'
import {
    Garment,
    GarmentProfile,
    Boundry,
    Color,
    FilterPart,
    FilterTypes,
} from '../../utility/types'
// Details Bar:
// Allows user to set boundries, neckline and filters for item base and detail
// Allows user to save items
type AppProps = {
    item: Garment
    setItem: React.Dispatch<React.SetStateAction<Garment>>
    label: string
    data: GarmentProfile
    required: boolean
}
const DetailsBar = function DetailsBar({
    // setSavedItems,
    item,
    setItem,
    label,
    data,
    required,
}: AppProps): JSX.Element {
    const {
        lowerBoundaryKey,
        upperBoundaryKey,
        lowerBoundaryIndex,
        upperBoundaryIndex,
        typeKey,
    } = item
    const { upperBoundaries } = data[typeKey]
    const { lowerBoundaries } = data[typeKey]

    // adds current item to savedItems array
    // const saveCurrentItem = () => {
    //   const itemsCopy = savedItems.slice();
    //   itemsCopy.push(JSON.parse(JSON.stringify(item)));
    //   setSavedItems(itemsCopy);
    // };
    // updates item's filter (for the base and decoration so far)
    // inputs:
    // e: event from onChange
    // type: 'hue', 'con', 'sat', 'op', 'sat'
    // part: any key of the 'item' object that has the listed properties above
    const handleFilterChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        filterType: FilterTypes,
        part: FilterPart
    ): void => {
        const copy = JSON.parse(JSON.stringify(item)) // Object.assign({}, item);
        // copy[part][filterType] = e.target.value;
        copy.baseFilter[filterType] = e.target.value
        setItem(copy)
    }
    const handleFilterPresetClick = (preset: Color, part: FilterPart): void => {
        const copy = makeCopy(item)
        // copy[part] = preset;
        copy.baseFilter = preset
        setItem(copy)
    }
    // updates item's boundaries
    // inputs:
    // e: event from onChange
    // type: string, name of type of boundary
    const handleBoundaryChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: 'upperBoundaryIndex' | 'lowerBoundaryIndex'
    ): void => {
        const index = Number(e.target.value)

        const itemCopy = makeCopy(item)
        itemCopy[type] = index
        // console.log('index', type, index)
        // console.log('lower boundry url', data[typeKey].lowerBoundaries[lowerBoundaryKey]);
        // console.log('upper boundry url', data[typeKey].upperBoundaries[upperBoundaryKey]);
        setItem(itemCopy)
    }
    // upperBoundaryKey: string | null,
    // upperBoundaryIndex: number,
    // lowerBoundaryKey: string | null,
    // lowerBoundaryIndex: number,
    // necklineKey: string | null,
    // neckLineIndex: number,
    const radioList = (
        keys: string[],
        radioLabel: string,
        itemKey: 'upperBoundaryKey' | 'lowerBoundaryKey' | 'necklineKey',
        itemIndexProperty:
            | 'upperBoundaryIndex'
            | 'lowerBoundaryIndex'
            | 'neckLineIndex'
    ): JSX.Element[] =>
        keys.map((name) => (
            <div key={label + name}>
                <label className="" htmlFor={label + name}>
                    {name}
                </label>
                <input
                    type="radio"
                    name={radioLabel + name}
                    onChange={() => {
                        const itemCopy = makeCopy(item)
                        itemCopy[itemKey] = name
                        itemCopy[itemIndexProperty] = 0
                        setItem(itemCopy)
                    }}
                    checked={name === item[itemKey]}
                />
            </div>
        ))
    const boundarySlider = (
        currentIndex: number,
        boundryKey: string | null,
        boundryList: Boundry[],
        boundryIndexType: 'lowerBoundaryIndex' | 'upperBoundaryIndex',
        sliderLabel: string
    ): JSX.Element => (
        <>
            <label className="range-label" htmlFor={`${label}-range`}>
                {sliderLabel}
            </label>
            <input
                disabled={boundryKey === undefined}
                className="range-input"
                type="range"
                name={`${label}-range`}
                value={currentIndex}
                min="0"
                max={boundryKey ? boundryList.length - 1 : 0}
                step="1"
                onChange={(e) => {
                    handleBoundaryChange(e, boundryIndexType)
                }}
            />
        </>
    )
    const handleRemoveButton = (): void => {
        const itemCopy = makeCopy(item)
        itemCopy.isVisible = false
        setItem(itemCopy)
    }
    return (
        <div className="details-bar">
            <button
                disabled={!item.isVisible || required}
                className="menu-button remove-garment-btn"
                type="button"
                onClick={handleRemoveButton}
            >
                Remove
            </button>
            <h4>Details</h4>
            {radioList(
                Object.keys(upperBoundaries),
                'Upper boundry',
                'upperBoundaryKey',
                'upperBoundaryIndex'
            )}
            {upperBoundaryKey &&
                boundarySlider(
                    upperBoundaryIndex,
                    upperBoundaryKey,
                    upperBoundaries[upperBoundaryKey],
                    'upperBoundaryIndex',
                    'Upper Boundry Height'
                )}
            {radioList(
                Object.keys(lowerBoundaries),
                'Lower Boundry',
                'lowerBoundaryKey',
                'lowerBoundaryIndex'
            )}
            {lowerBoundaryKey &&
                boundarySlider(
                    lowerBoundaryIndex,
                    lowerBoundaryKey,
                    lowerBoundaries[lowerBoundaryKey],
                    'lowerBoundaryIndex',
                    'Lower Boundry Height'
                )}
            <hr />
            <ColorPicker
                filter={item.baseFilter}
                label="Base"
                handleFilterChange={handleFilterChange}
                handleFilterPresetClick={handleFilterPresetClick}
                part="baseFilterA"
            />
            <hr />
            {/* <ColorPicker filter={item.decorationFilter}
       label="Decoration" handleFilterChange={handleFilterChange}
       handleFilterPresetClick={handleFilterPresetClick} part="decorationFilter"/>
      <button className="save-button" onClick={saveCurrentItem}>Save {label}</button> */}
        </div>
    )
}
export default DetailsBar
