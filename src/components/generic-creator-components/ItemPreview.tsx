import React from 'react'
import { Garment, GarmentProfile, Substitues } from '../../utility/types'
import { firstKeyOf } from '../../utility/helper-functions'
import Item from '../Item'

type AppProps = {
    handleOnClickEvent: (itemInUse: Garment) => void
    previewCorrection: string
    data: GarmentProfile
    substitutes: Substitues
}
const ItemPreview = function ({
    handleOnClickEvent,
    previewCorrection,
    data,
    substitutes,
}: AppProps): JSX.Element {
    const firstKeyOfData = firstKeyOf(data)
    const itemProfile = {
        typeKey: substitutes.typeKey || firstKeyOfData,
        upperBoundaryKey: data[firstKeyOfData].upperBoundaries
            ? firstKeyOf(data[firstKeyOfData].upperBoundaries)
            : '',
        upperBoundaryIndex:
            data[firstKeyOfData].previewSettings.defaultUBIndex || 0,
        lowerBoundaryKey: data[firstKeyOfData].lowerBoundaries
            ? firstKeyOf(data[firstKeyOfData].lowerBoundaries)
            : '',
        lowerBoundaryIndex:
            data[firstKeyOfData].previewSettings.defaultLBIndex || 0,
        necklineKey: null,
        neckLineIndex: 0,
        baseKey: substitutes.baseKey || firstKeyOf(data[firstKeyOfData].bases),
        baseFilter: {
            hue: 0,
            sat: 100,
            brit: 1,
            con: 100,
            op: 100,
        },
        seamKey: data[firstKeyOfData].seams.length
            ? {
                  name:
                      substitutes.seamKeyName ||
                      firstKeyOf(data[firstKeyOfData].seams),
                  type: 'line',
              }
            : null,
        decoration: substitutes.decoration || { hasBoundaries: false },
        decorationFilter: {
            hue: 180,
            sat: 100,
            brit: 1.2,
            con: 100,
            op: 100,
        },
    }
    return (
        <button
            className="preview-container"
            key={JSON.stringify(substitutes)}
            type="button"
            onClick={() => {
                handleOnClickEvent(itemProfile)
            }}
        >
            <div className={previewCorrection}>
                <Item
                    itemProfile={itemProfile}
                    zCounter={500}
                    displayClass="preview-inner"
                    typeData={data}
                />
            </div>
            <div className="label-box">
                {substitutes.typeKey ||
                    substitutes.baseKey ||
                    substitutes.seamKeyName ||
                    substitutes.decoration}
            </div>
        </button>
    )
}
export default ItemPreview
