import React, { useState, useContext } from 'react'
import GenericCreator from '../generic-creator-components/GenericCreator'
import GarmentContext from '../../context'
import { garmentProfiles } from '../../utility/sample-data'

const BottomCreator = function BottomCreator(): JSX.Element {
    const { bottom, setBottom, feet, setFeet } = useContext(GarmentContext)
    const [savedBottoms, setSavedBottoms] = useState([])
    return (
        <GenericCreator
            tabItems={[
                {
                    label: 'Pants',
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
                    label: 'Footware',
                    item: feet,
                    itemSetter: setFeet,
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
