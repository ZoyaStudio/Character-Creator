function BodyPanel (props) {

  return (
    <div className="major-panel garment-creator">
    <div className="menu">
     <button className={createNewTopClass} onClick={toggleIsSavedTops}>Create New Top</button>
     <button className={savedTopsClass} onClick={toggleIsSavedTops}>Saved Tops</button>
   </div>
   <DetailsBar savedTops={savedTops} setSavedTops={setSavedTops}/>
   {isSavedTop && <ExistingTop savedTops={savedTops} setSavedTops={setSavedTops}/>}
   {!isSavedTop &&  <CreateNewTop savedTops={savedTops} setSavedTops={setSavedTops}/>}

 </div>
  )
}