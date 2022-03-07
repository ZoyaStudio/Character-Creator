import React from 'react'
import GenericPanels from './GenericPanels'
import DetailsBar from './DetailsBar'
import ItemPreview from './ItemPreview'
import { TabItem, Garment, GenericPanelsProps } from '../../utility/types'
import { makeCopy } from '../../utility/helper-functions'

// {typeKey: typeKey, baseKey: null, seamKeyName: null, decoration: null}
type GenericCreatorProps = {
    tabItems: TabItem[]
}
const GenericCreator = function GenericCreator({
    tabItems,
}: GenericCreatorProps): JSX.Element {
    // const [currentTypeKey, setCurrentTypeKey] = useState(
    //   tabItems[0].item.typeKey
    // );

    const tabProfilesSelection: GenericPanelsProps = {}
    // const tabProfilesSavedItems = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const itemSet of tabItems) {
        const {
            label,
            item,
            cssClasses,
            itemSetter,
            // savedItems,
            // setSavedItems,
            data,
            required,
            previewClass,
        } = itemSet

        const handleOnClickFunctionCreator =
            (type: 'all' | 'baseKey' | 'seamKey') =>
            (info: Garment): void => {
                const infoCopy = makeCopy(info)
                const itemCopy = makeCopy(item)
                if (type === 'all') {
                    itemSetter(infoCopy)
                    // eslint-disable-next-line brace-style
                } else {
                    // @ts-expect-error not sure why typescript is still
                    // complaining
                    itemCopy[type] = info[type]
                    itemSetter(itemCopy)
                }
            }
        tabProfilesSelection[label] = {
            isVisible: item.isVisible,
            cssClasses,
            setIsVisible: () => {
                const itemCopy = makeCopy(item)
                itemCopy.isVisible = true
                itemSetter(itemCopy)
                console.log('should be visivble')
            },
            list: [
                {
                    label: 'Type',
                    items: Object.keys(data).map((typeKey) => (
                        <ItemPreview
                            handleOnClickEvent={handleOnClickFunctionCreator(
                                'all'
                            )}
                            previewCorrection={previewClass}
                            data={data}
                            substitutes={{
                                typeKey,
                                baseKey: null,
                                seamKeyName: null,
                                decoration: null,
                            }}
                            key={`${typeKey}type`}
                        />
                    )),
                },
                {
                    label: 'Base',
                    items: Object.keys(data[item.typeKey].bases).map(
                        (baseKey) => {
                            return (
                                <ItemPreview
                                    handleOnClickEvent={handleOnClickFunctionCreator(
                                        'baseKey'
                                    )}
                                    previewCorrection={previewClass}
                                    data={data}
                                    substitutes={{
                                        typeKey: null,
                                        baseKey,
                                        seamKeyName: null,
                                        decoration: null,
                                    }}
                                    key={`${baseKey}base`}
                                />
                            )
                        }
                    ),
                },
                // {
                //   label: 'Seams',
                //   items: Object.keys(data[item.typeKey].seams).map((seamKeyName) =>
                // itemPreview(handleOnClickFunctionCreator('seamKey'), previewClass, data, {
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
            detailBar: (
                <DetailsBar
                    // setSavedItems={setSavedItems}
                    item={item}
                    setItem={itemSetter}
                    label={label}
                    data={data}
                    required={required}
                />
            ),
        }
        // tabProfilesSavedItems['Saved ' + label] = {

        // }
    }
    // @ts-expect-error this should cause an error
    return <GenericPanels tabProfiles={tabProfilesSelection} />
}
export default GenericCreator
