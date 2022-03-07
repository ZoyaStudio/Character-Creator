import React, { useState, useContext } from 'react'
import GenericCreator from '../generic-creator-components/GenericCreator'
import GarmentContext from '../../context'
import { garmentProfiles } from '../../utility/sample-data'

const BottomCreator = function BottomCreator(): JSX.Element {
    const {
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
    } = useContext(GarmentContext)
    const [savedBottoms, setSavedBottoms] = useState([])
    return (
        <GenericCreator
            tabItems={[
                {
                    label: 'Pants First',
                    cssClasses: 'set1 set-start',
                    item: bottom,
                    itemSetter: setBottom,
                    savedItems: savedBottoms,
                    setSavedItems: setSavedBottoms,
                    data: garmentProfiles.bottoms,
                    // garmentData: garmentProfiles.bottoms.skinTight,
                    required: true,
                    previewClass: 'preview-bottom',
                },
                {
                    label: 'Pants Second',
                    cssClasses: 'set1 set-middle',
                    item: bottom2,
                    itemSetter: setBottom2,
                    savedItems: savedBottoms,
                    setSavedItems: setSavedBottoms,
                    data: garmentProfiles.bottoms,
                    // garmentData: garmentProfiles.bottoms.skinTight,
                    required: false,
                    previewClass: 'preview-bottom',
                },
                {
                    label: 'Pants Third',
                    cssClasses: 'set1 set-end',
                    item: bottom3,
                    itemSetter: setBottom3,
                    savedItems: savedBottoms,
                    setSavedItems: setSavedBottoms,
                    data: garmentProfiles.bottoms,
                    // garmentData: garmentProfiles.bottoms.skinTight,
                    required: false,
                    previewClass: 'preview-bottom',
                },
                {
                    label: 'Footware First',
                    cssClasses: 'set2 set-start',
                    item: feet,
                    itemSetter: setFeet,
                    savedItems: savedBottoms,
                    setSavedItems: setSavedBottoms,
                    data: garmentProfiles.feets,
                    // garmentData: garmentProfiles.feets.skinTight,
                    required: false, // true,
                    previewClass: 'preview-feet',
                },
                {
                    label: 'Footware Second',
                    cssClasses: 'set2 set-middle',
                    item: feet2,
                    itemSetter: setFeet2,
                    savedItems: savedBottoms,
                    setSavedItems: setSavedBottoms,
                    data: garmentProfiles.feets,
                    // garmentData: garmentProfiles.feets.skinTight,
                    required: false, // true,
                    previewClass: 'preview-feet',
                },
                {
                    label: 'Footware Third',
                    cssClasses: 'set2 set-end',
                    item: feet3,
                    itemSetter: setFeet3,
                    savedItems: savedBottoms,
                    setSavedItems: setSavedBottoms,
                    data: garmentProfiles.feets,
                    // garmentData: garmentProfiles.feets.skinTight,
                    required: false, // true,
                    previewClass: 'preview-feet',
                },
            ]}
        />
    )
}
export default BottomCreator
