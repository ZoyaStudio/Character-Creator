import React, { useState } from "react";
import Gallary from "./Gallary";

const GenericPanels = function genericPanels({ tabProfiles }) {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabProfiles)[0]);
  const buttons = Object.keys(tabProfiles).map((tabName) => (
    <button
      type="button"
      key={tabName}
      className={
        currentTab === tabName ? "selected menu-button" : "menu-button"
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
      {tabProfiles[currentTab].detailBar}
      <div className="creation-panel minor-panel">
        {tabProfiles[currentTab].list.map((gallaryProfile) => (
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
