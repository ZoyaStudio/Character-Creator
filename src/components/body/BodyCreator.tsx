import React, { useState, useContext } from 'react'
import Gallary from '../generic-creator-components/Gallary'
import BodyDetailBar from './BodyDetailsBar'
import HairPreview from './HairPreview'
import { hairProfiles } from '../../utility/sample-data'
import GarmentContext from '../../context'
import { makeCopyHair } from '../../utility/helper-functions'
import { HairObj, HairTypes } from '../../utility/types'

const BodyCreator = function (): JSX.Element {
    const { setHair, hair } = useContext(GarmentContext)
    const handleHairOnclickEvent = (
        type: HairTypes,
        hairObj: HairObj
    ): void => {
        // console.log(hair, hairObj, type)
        const hairCopy = makeCopyHair(hair)
        hairCopy[type] = hairObj
        setHair(hairCopy)
    }
    const tabProfiles = {
        Body: [
            {
                label: 'Customization Options Coming Soon!',
                items: [],
            },
            //   {
            //   label: 'Eye Brows',
            //   items: []
            // },
            // {
            //   label: 'Eyes',
            //   items: []
            // },
            // {
            //   label: 'Nose',
            //   items: []
            // },
            // {
            //   label: 'Mouth',
            //   items: []
            // },
        ],
        Hair: [
            {
                label: 'Base',
                items: Object.keys(hairProfiles.bases).map((key) => (
                    <HairPreview
                        key={key}
                        previewCorrection="top-preview"
                        hairObj={{ typeKey: key, index: 0 }}
                        type="bases"
                        handleOnClickEvent={handleHairOnclickEvent}
                    />
                )),
            },
            // {
            //   label: 'Bangs',
            //   items: []
            // },
            // {
            //   label: 'Side Bangs',
            //   items: []
            // },
            // {
            //   label: 'Pig Tails',
            //   items: []
            // },
            // {
            //   label: 'Side Detail',
            //   items: []
            // },
            // {
            //   label: 'Back',
            //   items: []
            // }
        ],
    }
    const [currentTab, setCurrentTab] = useState('Body')
    const buttons = Object.keys(tabProfiles).map((tabName) => (
        <button
            type="button"
            key={tabName}
            className={
                currentTab === tabName ? 'selected menu-button' : 'menu-button'
            }
            onClick={() => {
                setCurrentTab(tabName)
            }}
        >
            {tabName}
        </button>
    ))

    return (
        <div className="major-panel garment-creator">
            <div className="section-menu menu">{buttons}</div>

            <BodyDetailBar />
            <div className="creation-panel minor-panel">
                {
                    // @ts-expect-error: current tab can only be a key of tabProfiles
                    tabProfiles[currentTab].map((gallaryProfile) => (
                        <Gallary
                            key={`${gallaryProfile.label} gallary`}
                            label={gallaryProfile.label}
                            items={gallaryProfile.items}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default BodyCreator
