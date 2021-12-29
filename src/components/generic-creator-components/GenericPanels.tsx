import React, { useState } from 'react';
import Gallary from './Gallary';
import DetailsBar from './DetailsBar';
import {GenericPanelsProps, TabProfileListItem } from '../../utility/types';

const GenericPanels = function GenericPanels({ tabProfiles } : GenericPanelsProps) {
  let defaultTab: keyof GenericPanelsProps = Object.keys(tabProfiles)[0];
  const [currentTab, setCurrentTab] = useState (defaultTab);
  const buttons = Object.keys(tabProfiles).map((tabName) => (
    <button
      type="button"
      key={tabName}
      className={
        currentTab === tabName ? 'selected menu-button' : 'menu-button'
      }
      onClick={() => {
        setCurrentTab(tabName);
      }}
    >
      {tabName}
    </button>
  ));
  return (
    <div className="major-panel garment-creator">
      <div className="section-menu menu">{buttons}</div>

      {
         // @ts-expect-error:
      tabProfiles[currentTab].detailBarInfo}
      (
        <DetailsBar
          // setSavedItems={setSavedItems}
          item={
             // @ts-expect-error:
            tabProfiles[currentTab].detailBarInfo.item}
          setItem={ // @ts-expect-error:
            tabProfiles[currentTab].detailBarInfo.itemSetter}
          label={ // @ts-expect-error:
            tabProfiles[currentTab].detailBarInfo.label}
          data={ // @ts-expect-error:
            tabProfiles[currentTab].detailBarInfo.data}
        />
      ),
      <div className="creation-panel minor-panel">
        {
          // @ts-expect-error:
        tabProfiles[currentTab].list.map((gallaryProfile: TabProfileListItem) => (
          <Gallary
            key={`${gallaryProfile.label}gallary`}
            label={gallaryProfile.label}
            items={gallaryProfile.items}
          />
        ))}
      </div>
    </div>
  );
};

export default GenericPanels;
