import React from 'react';
import GenericPanels from './GenericPanels';
import DetailsBar from './DetailsBar';
import ItemPreview from './ItemPreview';
import { TabItem, Garment, GenericPanelsProps} from '../../utility/types';
import { makeCopy} from '../../utility/helper-functions';

// {typeKey: typeKey, baseKey: null, seamKeyName: null, decoration: null}
type GenericCreatorProps = {
  tabItems: TabItem []
}
const GenericCreator = function GenericCreator({ tabItems }: GenericCreatorProps) {
  // const [currentTypeKey, setCurrentTypeKey] = useState(
  //   tabItems[0].item.typeKey
  // );

  const tabProfilesSelection : GenericPanelsProps ={};
  // const tabProfilesSavedItems = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const itemSet of tabItems) {
    const {
      label,
      item,
      itemSetter,
      // savedItems,
      // setSavedItems,
      data,
      // required,
      previewClass,
    } = itemSet;

    // const handleOnClickSavedItem = (info) => {
    //   const copy = JSON.parse(JSON.stringify(info));
    //   setSavedItems(copy);
    // };
    const handleOnClickFunctionCreator = (type : 'all' | 'baseKey' | 'seamKey') => (info:Garment): void=> {
      const infoCopy = makeCopy(info);
      const itemCopy = makeCopy(item);
      if (type === 'all') {
        itemSetter(infoCopy);
      // eslint-disable-next-line brace-style
      }
      // else if ((!required || type !== 'baseKey') && JSON.stringify(item[type])
      // === JSON.stringify(info[type])){
      //   itemCopy[type] = null;
      //   if (type === 'baseKey') {
      //     itemCopy.seamKey = null;
      //     itemCopy.lowerBoundaryKey = null;
      //     itemCopy.upperBoundaryKey = null;
      //   }
      //   itemSetter(itemCopy);
      // }
      else {
        // @ts-expect-error
        itemCopy[type] = info[type];
        itemSetter(itemCopy);
      }
      // var currentItemNameCopy = JSON.parse(JSON.stringify(item));
      //   if (true/*JSON.stringify(currentTopCopy[type]) === JSON.stringify(info) && !required*/) {
      //     currentItemNameCopy[type] = null;
      //   } else {
      //     currentItemNameCopy[type] = JSON.parse(JSON.stringify(info));
      //   }
      //   itemSetter(currentItemNameCopy);
    };
    tabProfilesSelection[label] = {
      list: [
        {
          label: 'Type',
          items: Object.keys(data).map((typeKey) =>  (
            <ItemPreview
              handleOnClickEvent={handleOnClickFunctionCreator('all')}
              previewCorrection={previewClass}
              data={data}
              substitutes={{
                typeKey,
                baseKey: null,
                seamKeyName: null,
                decoration: null,
              }}
              key={typeKey + 'type'}
            />)

          ),
        },
        {
          label: 'Base',
          items: Object.keys(data[item.typeKey].bases).map((baseKey) => {
            return (  <ItemPreview
              handleOnClickEvent={handleOnClickFunctionCreator('baseKey')}
              previewCorrection={previewClass}
              data={data}
              substitutes={{
                typeKey: null,
                baseKey,
                seamKeyName: null,
                decoration: null,
              }}
              key={baseKey + 'base'}
            />)
          }

          ),
        },
        // {
        //   label: 'Seams',
        //   items: Object.keys(data[item.typeKey].seams).map((seamKeyName) =>
        //itemPreview(handleOnClickFunctionCreator('seamKey'), previewClass, data, {
        //     typeKey: null, baseKey: null, seamKeyName, decoration: null,
        //   })),
        // },
        // {
        //   label: 'Decorations', items: decorations,
        // onClickHandler: handleOnClickFunctionCreator('decoration'),
        // previewFunction: decorationPreview,
        // },
      ],
      // detailBarInfo: {item, setItem: itemSetter, label, data}
      detailBar: <DetailsBar
      // setSavedItems={setSavedItems}
      item={item}
      setItem={itemSetter}
      label={label}
      data={data}
    />
    };
    // tabProfilesSavedItems['Saved ' + label] = {

    // }
  }
  // @ts-expect-error
  return <GenericPanels tabProfiles={tabProfilesSelection} />;
};
export default GenericCreator;
