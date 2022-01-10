// placeholder data for garment pieces
// TO DO: move data to database, fetch with API call
import { Boundry, Bases, GarmentProfile, HairProfiles, BodyProfiles } from './types';
const gentleCurveUpperBoundries : Boundry[] = [
  { url: './gentleCurve/gentleCurve0.svg', class: 'ub-gentle-curve-0' },
  { url: './gentleCurve/gentleCurve1.svg', class: 'ub-gentle-curve-1' },
  { url: './gentleCurve/gentleCurve2.svg', class: 'ub-gentle-curve-2' },
  { url: './gentleCurve/gentleCurve3.svg', class: 'ub-gentle-curve-3' },
  { url: './gentleCurve/gentleCurve4.svg', class: 'ub-gentle-curve-4' },
  { url: './gentleCurve/gentleCurve5.svg', class: 'ub-gentle-curve-5' },
  { url: './gentleCurve/gentleCurve9.svg', class: 'ub-gentle-curve-9' },
  { url: './gentleCurve/gentleCurve10.svg', class: 'ub-gentle-curve-10' },
  { url: './gentleCurve/gentleCurve11.svg', class: 'ub-gentle-curve-11' },
  { url: './gentleCurve/gentleCurve12.svg', class: 'ub-gentle-curve-12' },
  { url: './gentleCurve/gentleCurve13.svg', class: 'ub-gentle-curve-13' },
  { url: './gentleCurve/gentleCurve14.svg', class: 'ub-gentle-curve-14' },
  { url: './gentleCurve/gentleCurve15.svg', class: 'ub-gentle-curve-15' },
  { url: './gentleCurve/gentleCurve16.svg', class: 'ub-gentle-curve-16' },
  { url: './gentleCurve/gentleCurve17.svg', class: 'ub-gentle-curve-17' },
  { url: './gentleCurve/gentleCurve18.svg', class: 'ub-gentle-curve-18' },
  { url: './gentleCurve/gentleCurve19.svg', class: 'ub-gentle-curve-19' },
];
const gentleCurveLowerBoundries: Boundry [] = [
  { url: './gentleCurve/gentleCurve1.svg', class: 'lb-gentle-curve-1' },
  { url: './gentleCurve/gentleCurve2.svg', class: 'lb-gentle-curve-2' },
  { url: './gentleCurve/gentleCurve6.svg', class: 'lb-gentle-curve-6' },
  { url: './gentleCurve/gentleCurve7.svg', class: 'lb-gentle-curve-7' },
  { url: './gentleCurve/gentleCurve8.svg', class: 'lb-gentle-curve-8' },
  { url: './gentleCurve/gentleCurve9.svg', class: 'lb-gentle-curve-9' },
  { url: './gentleCurve/gentleCurve10.svg', class: 'lb-gentle-curve-10' },
  { url: './gentleCurve/gentleCurve11.svg', class: 'lb-gentle-curve-11' },
  { url: './gentleCurve/gentleCurve12.svg', class: 'lb-gentle-curve-12' },
  { url: './gentleCurve/gentleCurve13.svg', class: 'lb-gentle-curve-13' },
  { url: './gentleCurve/gentleCurve14.svg', class: 'lb-gentle-curve-14' },
  { url: './gentleCurve/gentleCurve15.svg', class: 'lb-gentle-curve-15' },
  { url: './gentleCurve/gentleCurve16.svg', class: 'lb-gentle-curve-16' },
  { url: './gentleCurve/gentleCurve17.svg', class: 'lb-gentle-curve-17' },
  { url: './gentleCurve/gentleCurve18.svg', class: 'lb-gentle-curve-18' },
  { url: './gentleCurve/gentleCurve19.svg', class: 'lb-gentle-curve-19' },
  { url: './gentleCurve/gentleCurve20.svg', class: 'lb-gentle-curve-20' },
  { url: './gentleCurve/gentleCurve21.svg', class: 'lb-gentle-curve-21' },
  { url: '', class: '' },
];
const upChevronLowerBoundries: Boundry[] = [
  { url: './upChevron/upChevron1.svg', class: 'lb-chevron-1' },
  { url: './upChevron/upChevron2.svg', class: 'lb-chevron-2' },
  { url: './upChevron/upChevron3.svg', class: 'lb-chevron-3' },
  // {url: "./upChevron/upChevron4.svg",
  // class: "lb-chevron-4"
  // }
];

const skinTightBases: Bases = {
  'Plain': {
    outlineUrl: '/SkinTightBodySuit/TightBodySuitOutline.svg',
    gradientUrl: '/SkinTightBodySuit/TightBodySuitGradient.svg',
    shadingUrl: '/SkinTightBodySuit/TightBodySuitShading.svg',
  },
  'Lace': {
    outlineUrl: '/SkinTightBodySuit/TightBodySuitOutline.svg',
    gradientUrl: '',
    shadingUrl: '/SkinTightBodySuit/lace-shading.png',
  },
  'Tight Knit': {
    outlineUrl: '/SkinTightBodySuit/TightBodySuitOutline.svg',
    gradientUrl: '/SkinTightBodySuit/TightBodySuitGradient.svg',
    shadingUrl: '/SkinTightBodySuit/smallCordedBase2.png',
  },
  'Wide Knit': {
    outlineUrl: '/SkinTightBodySuit/TightBodySuitOutline.svg',
    gradientUrl: '/SkinTightBodySuit/TightBodySuitGradient.svg',
    shadingUrl: '/SkinTightBodySuit/wideCordedBase2.png',
  },
};
const bodySuitBases : Bases = {
  'Plain': {
    outlineUrl: '/BodySuit/BodySuitOutline.svg',
    gradientUrl: '/BodySuit/BodySuitGradient.svg',
    shadingUrl: '/BodySuit/BodySuitShading.svg',
  },
};

export const garmentProfiles : {[key: string] : GarmentProfile} = {
  tops: {
    'Skin Tight': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 5,
      },
      bases: skinTightBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(2, 6),
      },
      lowerBoundaries: {
        // "Up Chevron": upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(2, 8),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
    'Body Suit': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 5,
      },
      bases: bodySuitBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(2, 6),
      },
      lowerBoundaries: {
        'Up Chevron': upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(2, 8),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
  },
  collars: {
    'Skin Tight': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 0,
      },
      bases: skinTightBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(0, 2),
      },
      lowerBoundaries: {
        // "Up Chevron": upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(0, 2),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
  },
  onePiece: {
    'Skin Tight': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 5,
      },
      bases: skinTightBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries,
      },
      lowerBoundaries: {
        'Up Chevron': upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries,
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
    'Body Suit': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 5,
      },
      bases: bodySuitBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries,
      },
      lowerBoundaries: {
        'Up Chevron': upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries,
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
  },
  bottoms: {
    'Skin Tight': {
      previewSettings: {
        defaultUBIndex: 1,
        defaultLBIndex: 7,
      },
      bases: skinTightBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(6, 9),
      },
      lowerBoundaries: {
        // "Up Chevron": upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(8, 19),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
    'Body Suit': {
      previewSettings: {
        defaultUBIndex: 1,
        defaultLBIndex: 7,
      },
      bases: bodySuitBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(6, 9),
      },
      lowerBoundaries: {
        // "Up Chevron": upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(8, 19),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
  },
  feets: {
    'Skin Tight': {
      previewSettings: {
        defaultUBIndex: 3,
        defaultLBIndex: 9,
      },
      bases: skinTightBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(9, 17),
      },
      lowerBoundaries: {
        // "Up Chevron": upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(9, 19),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
    'Body Suit': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 0,
      },
      bases: bodySuitBases,
      upperBoundaries: {
        'Gentle Curve': gentleCurveUpperBoundries.slice(9, 17),
      },
      lowerBoundaries: {
        // "Up Chevron": upChevronLowerBoundries,
        'Gentle Curve': gentleCurveLowerBoundries.slice(9, 19),
      },
      seams: {
        'Center Front': {
          line: './SeamLines/CenterFront.svg',
        },
        'Waist Seam': {
          line: './SeamLines/NaturalWaistSeam.svg',
        },
        'Curve at Bust': {
          line: './SeamLines/QuarterSeamCurveAtBust.svg',
        },
        'Curve at Shoulder': {
          line: './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
        },
      },
      necklines: {},
      decorations: {},
    },
  },
  sleeves: {
    'Puff Sleeves': {
      previewSettings: {
        defaultUBIndex: 0,
        defaultLBIndex: 5,
      },
      bases: {
        Plain: {
          outlineUrl: './PuffSleeves/PuffSleeves-Outline.svg',
          shadingUrl: './PuffSleeves/PuffSleeves-Shading.svg',
          gradientUrl: './PuffSleeves/PuffSleeves-Gradient.png',
        },
      },
      upperBoundaries: {},
      lowerBoundaries: {},
      necklines: {},
      seams: {},
      decorations: {},
    },
  },


};

export const hairProfiles:HairProfiles = {
  bases: {
    'Short Hair': [
    {
      outlineUrl: './hair-assets/ShortHair/ShortHairOutline.svg',
      gradientUrl: './hair-assets/ShortHair/ShortHairGradient.png',
      shadingUrl: './hair-assets/ShortHair/ShortHairShading.png',
    }],
    "Witchy Hair": [
      {
        outlineUrl: './hair-assets/MildWavyHair/MildWavyHairOutline.png',
        gradientUrl: './hair-assets/MildWavyHair/MildWavyHairGradient.png',
        shadingUrl: './hair-assets/MildWavyHair/MildWavyHairShading.png',
      },
      {
        outlineUrl: './hair-assets/MildWavyHairShoulderLength/MildWavyHairShoulderLengthOutline.png',
        gradientUrl: './hair-assets/MildWavyHairShoulderLength/MildWavyHairShoulderLengthGradient.png',
        shadingUrl: './hair-assets/MildWavyHairShoulderLength/MildWavyHairShoulderLengthShading.png',
      },
      {
        outlineUrl: './hair-assets/WitchyHairTorsoLength/WitchyHairTorsoLengthOutline.png',
        gradientUrl: './hair-assets/WitchyHairTorsoLength/WitchyHairTorsoLengthGradient.png',
        shadingUrl: './hair-assets/WitchyHairTorsoLength/WitchyHairTorsoLengthShading.png',
      },
      {
        outlineUrl: './hair-assets/WitchyHairKneeLength/WitchyHairKneeLengthOutline.png',
        gradientUrl: './hair-assets/WitchyHairKneeLength/WitchyHairKneeLengthGradient.png',
        shadingUrl: './hair-assets/WitchyHairKneeLength/WitchyHairKneeLengthShading.png',
      },
      {
        outlineUrl: './hair-assets/WitchyHairFloorLength/WitchyHairFloorLengthOutline.png',
        gradientUrl: './hair-assets/WitchyHairFloorLength/WitchyHairFloorLengthGradient.png',
        shadingUrl: './hair-assets/WitchyHairFloorLength/WitchyHairFloorLengthShading.png',
      },
    ],
    'Wolfy Boy Cut': [
      {
        outlineUrl: './hair-assets/WolfyBoyCut/WolfyBoyCutOutline.svg',
        gradientUrl: './hair-assets/WolfyBoyCut/WolfyBoyCutGradient.svg',
        shadingUrl: './hair-assets/WolfyBoyCut/WolfyBoyCutShading.svg',
      }
    ],
    // 'Mild Wavy': [

    // ]
  },
}//public/hair-assets/MildWavyHair/MildWavyHairOutline.png

export const bodyProfiles : BodyProfiles = {
  heads: {
    'Average Girl': {
      outline: './Body-Layers/OutlineB.svg',
      gradient: './Body-Layers/GradientB.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingBDark.svg',
      lightShade: './Body-Layers/ShadingBLight.svg',
      faceShade: null
    },
  },
  ears: {
    'Normal Ear': {
      outline: './Body-Layers/OutlineA.svg',
      gradient: './Body-Layers/GradientA.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingADark.svg',
      lightShade: './Body-Layers/ShadingALight.svg',
      faceShade: null
    },
  },
  eyebrows: {
    'Curled EyeBrows': {
      outline: './EyeBrows/CurledEyebrows.png',
    },
  },
  eyes: {
    'Round Eyes': {
      outlines: {
        noLash: '',
        midLash: '',
        longLashed: './RoundEyes/RoundEyesLongLashed-Outline.png',
      },
      pupils: {
        normal: './RoundEyes/RoundEyePupil.png',
        cat: '',
      },
      irisStyle: {
        normal: {
          outlineUrl: './RoundEyes/RoundEyeNormalIris-Outline.png',
          shadingUrl: './RoundEyes/RoundEyeNormalIris-Shading.png',
        },
        glazed: {
          outlineUrl: '',
          shadingUrl: '',
        },
        intense: {
          outlineUrl: '',
          shadingUrl: '',
        },
      },
      eyewhite: '',
    },
  },
  noses: {
    'Classic Anime Nose': {
      outline: './ClassicAnimeNose/ClassicAnimeNose-Outline.png', // .svg',
      faceShade: './ClassicAnimeNose/ClassicAnimeNose-Shading.png',
    },
  },
  mouths: {
    'Bright Smile': {
      outline: './BrightSmile/BrightSmile-Outline.png',
      faceShade: './BrightSmile/BrightSmile-Shading.png',
    },
  },
  faceDetails: {},
  torsoLegs: {
    'Busty Not Muscular': {
      outline: './Body-Layers/OutlineA.svg',
      gradient: './Body-Layers/GradientA.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingADark.svg',
      lightShade: './Body-Layers/ShadingALight.svg',
      faceShade: null
    },
  },
  backArms: {
    Skinny: {
      outline: './Body-Layers/OutlineB.svg',
      gradient: './Body-Layers/GradientB.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingBDark.svg',
      lightShade: './Body-Layers/ShadingBLight.svg',
      faceShade: null
    },
  },
  frontArms: {
    Skinny: {
      outline: './Body-Layers/OutlineB.svg',
      gradient: './Body-Layers/GradientB.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingBDark.svg',
      lightShade: './Body-Layers/ShadingBLight.svg',
      faceShade: null
    },
  },
}
