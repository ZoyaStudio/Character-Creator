// misc
export type Color = {
    hue: number
    sat: number
    brit: number
    con: number
    op: number
}
export type FilterTypes = keyof Color
// body
export type BodyFilterSet = {
    blush: Color
    lightShade: Color
    darkShade: Color
    faceShade: Color
}
export type FilterPart =
    | 'baseFilterA'
    | 'baseFilterB'
    | 'baseFilterC'
    | 'tintFilter'

// data
export type UrlSet = {
    outlineUrl: string
    gradientUrlA: string
    gradientUrlB: string | null
    gradientUrlC: string | null
    shadingUrlA: string
    shadingUrlB: string | null
    shadingUrlC: string | null
}
export type Boundry = {
    url: string
    boundryDetail: {
        [key: string]: UrlSet
    }
    class: string
}
export type Bases = {
    [key: string]: {
        outlineUrl: string
        gradientUrl: string
        shadingUrl: string
    }
}

export type GarmentProfileAtType = {
    previewSettings: {
        defaultUBIndex: number
        defaultLBIndex: number
    }
    bases: Bases
    upperBoundaries: {
        [key: string]: Boundry[]
    }
    lowerBoundaries: {
        [key: string]: Boundry[]
    }
    seams: {
        [key: string]: {
            line: string
        }
    }
    necklines: { [key: string]: Boundry[] }
    decorations: {
        [key: string]: UrlSet
    }
}
export type GarmentProfile = {
    [key: string]: GarmentProfileAtType
}
export type HairProfile = {
    [key: string]: UrlSet[]
}
export type HairProfiles = {
    bases: HairProfile
}
export type BodyProfiles = {
    heads: { [key: string]: BodyPngs }
    ears: { [key: string]: BodyPngs }
    eyebrows: { [key: string]: { outline: string } }
    eyes: {
        [key: string]: {
            outlines: {
                noLash: string
                midLash: string
                longLashed: string
            }
            pupils: {
                normal: string
                cat: string
            }
            irisStyle: {
                normal: {
                    outlineUrl: string
                    shadingUrl: string
                }
                glazed: {
                    outlineUrl: string
                    shadingUrl: string
                }
                intense: {
                    outlineUrl: string
                    shadingUrl: string
                }
            }
            eyewhite: string
        }
    }
    noses: {
        [key: string]: {
            outline: string
            faceShade: string
        }
    }
    mouths: {
        [key: string]: {
            outline: string
            faceShade: string
        }
    }
    faceDetails: { [key: string]: BodyPngs }
    torsoLegs: { [key: string]: BodyPngs }
    backArms: { [key: string]: BodyPngs }
    frontArms: { [key: string]: BodyPngs }
}

// character
export type HairTypes = keyof HairProfiles
export type Hair = {
    baseFilterA: Color
    baseFilterB: Color
    baseFilterC: Color
    tintFilter: Color
    bases: HairObj
}
export type HairFilters = 'baseFilterA' | 'tintFilter'
export type HairObj = {
    typeKey: string
    index: number
}
export type HairSubstitues = {
    base: HairObj
    side: HairObj
    back: HairObj
}
export type Garment = {
    isVisible: boolean
    typeKey: string
    upperBoundaryKey: string | null
    upperBoundaryIndex: number
    lowerBoundaryKey: string | null
    lowerBoundaryIndex: number
    necklineKey: string | null
    neckLineIndex: number
    baseKey: string
    baseFilter: Color
    // baseFilterA: Color,
    // baseFilterB: Color,
    // baseFilterC: Color,
    // tintFilter: Color,
    seamKey: { name: string; type: string } | null
    decoration: { hasBoundaries: boolean }
    decorationFilter: Color
}
export type GarmentCollection = {
    [key: string]: Garment
}
export type BodyPngs = {
    outline: string
    gradient: string
    blush: string
    darkShade: string
    lightShade: string
    faceShade: string | null
}
export type Eye = {
    baseFilterA: Color
    baseFilterB: Color
    baseFilterC: Color
    tintFilter: Color
    typeKey: string
    irisStyle: 'normal' | 'glazed' | 'intense'
    pupilStyle: 'normal' | 'cat'
    lashLength: 'noLash' | 'longLashed' | 'midLash'
}
export type Body = {
    bodySettings: {
        hasEarOverHair: boolean
        mouthHeight: number
        noseHeight: number
        eyeBrowHeight: number
    }
    filterSet: {
        blush: Color
        lightShade: Color
        darkShade: Color
        faceShade: Color
    }
    head: BodyPngs
    eyes: Eye
    mouth: {
        outline: string
        faceShade: string
    }
    eyebrows: {
        outline: string
    }
    nose: {
        outline: string
        faceShade: string
    }
    ear: BodyPngs
    torsoLegs: BodyPngs
    backArm: BodyPngs
    frontArm: BodyPngs
}

export type TabItem = {
    label: string
    item: Garment
    itemSetter: React.Dispatch<React.SetStateAction<Garment>>
    savedItems: Garment[]
    setSavedItems: React.Dispatch<React.SetStateAction<never[]>>
    // React.Dispatch<React.SetStateAction<Garment>>,
    data: GarmentProfile
    // garmentData: GarmentProfileAtType,
    required: boolean
    previewClass: string
}

export type Substitues = {
    typeKey: string | null
    baseKey: string | null
    seamKeyName: string | null
    decoration: null
}

export type TabProfileListItem = {
    label: string
    items: JSX.Element[]
}

export type GenericPanelsProps = Record<
    string,
    {
        isVisible: boolean
        setIsVisible: () => void
        list: TabProfileListItem[]
        detailBar: JSX.Element
        // {
        //   item: Garment,
        //   setItem: React.Dispatch<React.SetStateAction<Garment>>,
        //   label: string,
        //   data: GarmentProfile}
    }
>
