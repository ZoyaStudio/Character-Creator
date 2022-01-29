/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react'
import { makeFilterStyle } from '../utility/helper-functions'
import { Garment, GarmentProfile } from '../utility/types'

type AppProps = {
    itemProfile: Garment
    zCounter: number
    displayClass: string
    sectionClass: string
    typeData: GarmentProfile
}
const defaultProps = {
    displayClass: '',
    sectionClass: '',
}
const Item = function Item({
    itemProfile,
    zCounter,
    displayClass,
    sectionClass,
    typeData,
}: AppProps): JSX.Element {
    const {
        typeKey,
        upperBoundaryKey,
        upperBoundaryIndex,
        lowerBoundaryKey,
        lowerBoundaryIndex,
        necklineKey,
        neckLineIndex,
        baseKey,
        baseFilter,
        seamKey,
        // decoration,
        // decorationFilter,
    } = itemProfile
    if (displayClass !== 'portrait-img') {
        // console.log('item', itemProfile);
    }
    const base = typeData[typeKey].bases[baseKey]

    const neckline = necklineKey
        ? typeData[typeKey].necklines[necklineKey][neckLineIndex]
        : null
    // boundaries
    const upperBoundary = upperBoundaryKey
        ? typeData[typeKey].upperBoundaries[upperBoundaryKey][
              upperBoundaryIndex
          ]
        : {}
    const lowerBoundary = lowerBoundaryKey
        ? typeData[typeKey].lowerBoundaries[lowerBoundaryKey][
              lowerBoundaryIndex
          ]
        : {}

    // console.log('lowerBoundaryIndex', lowerBoundaryIndex);
    // //decorations
    // const decorationsArr = [
    //   <img
    //     alt="to be replaced"
    //     src={decoration.outlineUrl}
    //     className={displayClass}
    //     style={{ zIndex: zCounter }}
    //     key="decOut"
    //   />,
    //   <img
    //     alt="to be replaced"
    //     src={decoration.gradientUrl}
    //     className={displayClass}
    //     style={{
    //       zIndex: zCounter - 1,
    //       filter: makeFilterStyle(decorationFilter),
    //     }}
    //     key="decGrad"
    //   />,
    //   <img
    //     alt="to be replaced"
    //     src={decoration.shadingUrl}
    //     className={displayClass}
    //     style={{
    //       zIndex: zCounter - 2,
    //       filter: makeFilterStyle(decorationFilter),
    //     }}
    //     key="decShad"
    //   />,
    // ];

    // const lbClass = `${upperBoundary.class || "upperBoundaryClass"} portrait-img`;

    // base
    const baseImgs = base ? (
        <>
            <img
                alt="to be replaced"
                src={base.outlineUrl}
                className={displayClass}
                style={{ zIndex: zCounter - 10 }}
                key="baseOut"
            />
            <img
                alt="to be replaced"
                src={base.gradientUrl}
                className={displayClass}
                style={{
                    zIndex: zCounter - 11,
                    filter: makeFilterStyle(baseFilter),
                }}
                key="baseGrad"
            />
            <img
                alt="to be replaced"
                src={base.shadingUrl}
                className={displayClass}
                style={{
                    zIndex: zCounter - 12,
                    filter: makeFilterStyle(baseFilter),
                }}
                key="baseShad"
            />
        </>
    ) : (
        []
    )
    // }

    return (
        <div
            className={`${sectionClass} ${displayClass}`}
            style={{ zIndex: zCounter - 10 }}
        >
            {/* //   {!decoration.hasBoundaries && decorationsArr} */}
            <img
                alt="to be replaced"
                src={
                    // @ts-expect-error: I'll fix this later
                    upperBoundary.url
                }
                className={displayClass}
                style={{ zIndex: zCounter - 4 }}
                key="ub-img"
            />
            <div
                className={`${
                    // @ts-expect-error: I'll fix this later
                    upperBoundary.class || 'upperBoundaryClass'
                } ${displayClass}`}
                style={{ zIndex: zCounter - 5 }}
            >
                {/* neckline */}
                <div
                    className={`${neckline || 'neckineClass'} ${displayClass}`}
                >
                    {/* lower boundary */}
                    <img
                        alt="to be replaced"
                        src={
                            // @ts-expect-error: I'll fix this later
                            lowerBoundary.url
                        }
                        className={displayClass}
                        style={{ zIndex: zCounter - 3 }}
                        key="lb-img"
                    />
                    <div
                        className={`${
                            // @ts-expect-error: I'll fix this later
                            lowerBoundary.class || 'lowerBoundaryClass'
                        } ${displayClass}`}
                    >
                        {/* decoration */}
                        {/* {decoration.hasBoundaries && decorationsArr} */}
                        {seamKey && (
                            <img
                                alt="seam"
                                src={
                                    // @ts-expect-error: I'll fix this later
                                    typeData[typeKey].seams[seamKey.name][
                                        seamKey.type
                                    ]
                                }
                                className={displayClass}
                                style={{ zIndex: zCounter - 4 }}
                                key="item seam"
                            />
                        )}
                        {baseImgs}
                    </div>
                </div>
            </div>
            <div className="preview-background" />
        </div>
    )
}
Item.defaultProps = defaultProps
export default Item
