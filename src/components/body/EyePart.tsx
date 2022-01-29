import React from 'react'
import { bodyProfiles } from '../../utility/sample-data'
import { makeFilterStyle } from '../../utility/helper-functions'
import { Eye } from '../../utility/types'

type AppProps = {
    part: Eye
    displayClass: string
    zCounter: number
}
const EyePart = function eyepart({
    part,
    displayClass,
    zCounter,
}: AppProps): JSX.Element {
    const { baseFilterA, typeKey, irisStyle, pupilStyle, lashLength } = part

    const outline: string = bodyProfiles.eyes[typeKey].outlines[lashLength]
    const pupil: string = bodyProfiles.eyes[typeKey].pupils[pupilStyle]
    const irisOutline: string =
        bodyProfiles.eyes[typeKey].irisStyle[irisStyle].outlineUrl
    const irisShading: string =
        bodyProfiles.eyes[typeKey].irisStyle[irisStyle].shadingUrl

    return (
        <div
            className={displayClass}
            // onClick={onClickHandler}
            style={{ zIndex: zCounter - 1 }}
        >
            <img
                alt="outline"
                src={outline}
                style={{ zIndex: zCounter - 2 }}
                className={displayClass}
            />
            <img
                alt="iris outline"
                src={irisOutline}
                style={{ zIndex: zCounter - 3 }}
                className={displayClass}
            />
            <img
                alt="pupil"
                src={pupil}
                style={{ zIndex: zCounter - 4 }}
                className={displayClass}
            />
            <img
                alt="iris shading"
                src={irisShading}
                style={{
                    zIndex: zCounter - 5,
                    filter: makeFilterStyle(baseFilterA),
                }}
                className={displayClass}
            />
        </div>
    )
}
export default EyePart
