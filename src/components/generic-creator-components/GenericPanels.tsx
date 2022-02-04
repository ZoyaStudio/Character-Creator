import React, { useState } from 'react'
import Gallary from './Gallary'
import { GenericPanelsProps, TabProfileListItem } from '../../utility/types'

const GenericPanels = function GenericPanels({
    tabProfiles,
}: GenericPanelsProps): JSX.Element {
    const defaultTab: keyof GenericPanelsProps = Object.keys(tabProfiles)[0]
    const [currentTab, setCurrentTab] = useState(defaultTab)
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

            {
                // @ts-expect-error: this shouldn't cause an error
                tabProfiles[currentTab].isVisible &&
                    // @ts-expect-error: this shouldn't cause an error
                    tabProfiles[currentTab].detailBar
            }
            {
                // @ts-expect-error: this shouldn't cause an error
                !tabProfiles[currentTab].isVisible && (
                    <button
                        className="add-garment-btn menu-button"
                        onClick={
                            // @ts-expect-error: this shouldn't cause an error
                            tabProfiles[currentTab].setIsVisible
                        }
                        type="button"
                    >
                        Add Garment
                    </button>
                )
            }
            <div className="creation-panel minor-panel">
                {
                    // @ts-expect-error: this shouldn't cause an error
                    tabProfiles[currentTab].isVisible &&
                        // @ts-expect-error: this shouldn't cause an error
                        tabProfiles[currentTab].list.map(
                            (gallaryProfile: TabProfileListItem) => (
                                <Gallary
                                    key={`${gallaryProfile.label} gallary`}
                                    label={gallaryProfile.label}
                                    items={gallaryProfile.items}
                                />
                            )
                        )
                }
            </div>
        </div>
    )
}

export default GenericPanels
