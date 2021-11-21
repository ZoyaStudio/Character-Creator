
//placeholder data for garment pieces
//TO DO: move data to database, fetch with API call
const data = {
  tops: {
    skinTight: {
      bases: {
        plain: {
          outlineUrl: "/SkinTightBodySuit/TightBodySuitOutline.svg",
          gradientUrl: "/SkinTightBodySuit/TightBodySuitGradient.svg",
          shadingUrl: "/SkinTightBodySuit/TightBodySuitShading.svg",
        }
      },
      upperBoundaries: {
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve0.svg",
          class: "ub-gentle-curve-0"
          },
          {url: "./gentleCurve/gentleCurve1.svg",
          class: "ub-gentle-curve-1"
          },
          {url: "./gentleCurve/gentleCurve2.svg",
          class: "ub-gentle-curve-2"
          },
          {url: "./gentleCurve/gentleCurve3.svg",
          class: "ub-gentle-curve-3"
          },
          {url: "./gentleCurve/gentleCurve4.svg",
          class: "ub-gentle-curve-4"
          },
          {url: "./gentleCurve/gentleCurve5.svg",
          class: "ub-gentle-curve-5"
          },
          {url: "./gentleCurve/gentleCurve6.svg",
          class: "ub-gentle-curve-6"
          },
        ]
      },
      lowerBoundaries: {
        "Up Chevron": [
          {url: "./upChevron/upChevron1.svg",
          class: "lb-chevron-1"
          },
          {url: "./upChevron/upChevron2.svg",
          class: "lb-chevron-2"
          },
          {url: "./upChevron/upChevron3.svg",
          class: "lb-chevron-3"
          },
          // {url: "./upChevron/upChevron4.svg",
          // class: "lb-chevron-4"
          // }
        ],
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve7.svg",
          class: "lb-gentle-curve-7"
          },
          {url: "./gentleCurve/gentleCurve8.svg",
          class: "lb-gentle-curve-8"
          },
          {url: "./gentleCurve/gentleCurve9.svg",
          class: "lb-gentle-curve-9"
          },
          {url: "./gentleCurve/gentleCurve10.svg",
          class: "lb-gentle-curve-10"
          },
          {url: "./gentleCurve/gentleCurve11.svg",
          class: "lb-gentle-curve-11"
          },
          {url: "./gentleCurve/gentleCurve12.svg",
          class: "lb-gentle-curve-12"
          },
        ]
      },
      necklines: [],
      seams: [
        './SeamLines/CenterFront.svg',
        './SeamLines/NaturalWaistSeam.svg',
        './SeamLines/QuarterSeamCurveAtBust.svg',
        './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
      ],
      decorations: []
    },
  },
  sleeves: {
    'Puff Sleeves': {
      bases: {
          plain: {
            outlineUrl: './PuffSleeves/PuffSleeves-Outline.svg',
            shadingUrl: './PuffSleeves/PuffSleeves-Shading.svg',
            gradientUrl: './PuffSleeves/PuffSleeves-Gradient.png',
          }
        },
        upperBoundaries: null,
        lowerBoundaries: null,
        necklines: [],
        seams: [
        ],
        decorations: []
      },
  },
  bottoms: {
    // skinTight:
    skinTight: {
      bases: {
        plain: {
          outlineUrl: "/SkinTightBodySuit/TightBodySuitOutline.svg",
          gradientUrl: "/SkinTightBodySuit/TightBodySuitGradient.svg",
          shadingUrl: "/SkinTightBodySuit/TightBodySuitShading.svg",
        }
      },
      upperBoundaries: {
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve5.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve6.svg",
          class: ""
          },
        ]
      },
      lowerBoundaries: {
        "Up Chevron": [
          {url: "./upChevron/upChevron3.svg",
          class: ""
          },
        ],
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve7.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve8.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve9.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve10.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve11.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve12.svg",
          class: ""
          },
        ]
      },
      seams: [
        './SeamLines/CenterFront.svg',
        './SeamLines/NaturalWaistSeam.svg',
        './SeamLines/QuarterSeamCurveAtBust.svg',
        './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
      ],
      decorations: []
    },
  },
  feets: {
    skinTight: {
      bases: {
        plain: {
          outlineUrl: "/SkinTightBodySuit/TightBodySuitOutline.svg",
          gradientUrl: "/SkinTightBodySuit/TightBodySuitGradient.svg",
          shadingUrl: "/SkinTightBodySuit/TightBodySuitShading.svg",
        }
      },
      upperBoundaries: {
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve0.svg",
          class: "ub-gentle-curve-0"
          },
          {url: "./gentleCurve/gentleCurve1.svg",
          class: "ub-gentle-curve-1"
          },
          {url: "./gentleCurve/gentleCurve2.svg",
          class: "ub-gentle-curve-2"
          },
          {url: "./gentleCurve/gentleCurve3.svg",
          class: "ub-gentle-curve-3"
          },
          {url: "./gentleCurve/gentleCurve4.svg",
          class: "ub-gentle-curve-4"
          },
          {url: "./gentleCurve/gentleCurve5.svg",
          class: "ub-gentle-curve-5"
          },
          {url: "./gentleCurve/gentleCurve6.svg",
          class: "ub-gentle-curve-6"
          },
        ]
      },
      lowerBoundaries: {
        "Up Chevron": [
          {url: "./upChevron/upChevron3.svg",
          class: "lb-chevron-4"
          },
        ],
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve7.svg",
          class: "lb-gentle-curve-7"
          },
          {url: "./gentleCurve/gentleCurve8.svg",
          class: "lb-gentle-curve-8"
          },
          {url: "./gentleCurve/gentleCurve9.svg",
          class: "lb-gentle-curve-9"
          },
          {url: "./gentleCurve/gentleCurve10.svg",
          class: "lb-gentle-curve-10"
          },
          {url: "./gentleCurve/gentleCurve11.svg",
          class: "lb-gentle-curve-11"
          },
          {url: "./gentleCurve/gentleCurve12.svg",
          class: "lb-gentle-curve-12"
          },
        ]
      },
      seams: [
        './SeamLines/CenterFront.svg',
        './SeamLines/NaturalWaistSeam.svg',
        './SeamLines/QuarterSeamCurveAtBust.svg',
        './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
      ],
      decorations: []
    },
  },
  onePieces: {
    // skinTight:
    skinTight: {
      bases: {
        plain: {
          outlineUrl: "/SkinTightBodySuit/TightBodySuitOutline.svg",
          gradientUrl: "/SkinTightBodySuit/TightBodySuitGradient.svg",
          shadingUrl: "/SkinTightBodySuit/TightBodySuitShading.svg",
        }
      },
      upperBoundaries: {
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve5.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve6.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve6.svg",
          class: ""
          },
        ]
      },
      lowerBoundaries: {
        "Up Chevron": [
          {url: "./upChevron/upChevron4.svg",
          class: "lb-chevron-4"
          }
        ],
        "Gentle Curve": [
          {url: "./gentleCurve/gentleCurve7.svg",
          class: "lb-gentle-curve-7"
          },
          {url: "./gentleCurve/gentleCurve8.svg",
          class: "lb-gentle-curve-8"
          },
          {url: "./gentleCurve/gentleCurve9.svg",
          class: "lb-gentle-curve-9"
          },
          {url: "./gentleCurve/gentleCurve10.svg",
          class: "lb-gentle-curve-10"
          },
          {url: "./gentleCurve/gentleCurve11.svg",
          class: "lb-gentle-curve-11"
          },
          {url: "./gentleCurve/gentleCurve12.svg",
          class: "lb-gentle-curve-12"
          },
        ]
      },
      necklines: [],
      seams: [
        './SeamLines/CenterFront.svg',
        './SeamLines/NaturalWaistSeam.svg',
        './SeamLines/QuarterSeamCurveAtBust.svg',
        './SeamLines/QuarterSeamCurveAtMidShoulder.svg',
      ],
      decorations: []
    },
  },
  hair: {
    bases: {
      'Short Hair': {
        outlineUrl: './ShortHair/ShortHairOutline.svg',
        gradientUrl: './ShortHair/ShortHairGradient.png',
        shadingUrl: './ShortHair/ShortHairShading.png',
      }

    }
  },
  bodies: {
    heads: {
      'Average Girl': {
        outline:'./Body-Layers/OutlineB.svg',
        gradient: './Body-Layers/GradientB.svg',
        blush: './Body-Layers/Blush.svg',
        darkShade: './Body-Layers/ShadingBDark.svg',
        lightShade: './Body-Layers/ShadingBLight.svg',
      }
    },
    ears: {
      'Normal Ear': {
        toneType: 'matchSkin',
        outline:'./Body-Layers/OutlineA.svg',
        gradient: './Body-Layers/GradientA.svg',
        blush: './Body-Layers/Blush.svg',
        darkShade: './Body-Layers/ShadingADark.svg',
        lightShade: './Body-Layers/ShadingALight.svg',
      }
    },
    eyebrows: {
       "Curled EyeBrows": {
         outline: './EyeBrows/CurledEyebrows.png'
       }
    },
    eyes: {
      "Round Eyes": {
        //iris
        normalIris: {
          outline: './RoundEyeNormalIris-Outline.svg',
          shading: './RoundEyeNormalIris-Shading.svg',
        },
        glazedIris: {
          shadingA: '',
          shading4: '',
        },
        intenseIris: {
          outline: '',
          shading: '',
        },
        //pupil
        normalPupilOutline: './RoundEyePupil.svg',
        catPupilOutline: '',
        //eye shape
        longLashed: './RoundEyesLongLashed-Outline',
        midLashed: '',
        noLash: '',
        //eyewhite
        eyewhite: ''
      }
    },
    noses: {
      "Classic Anime Nose" : {
        outline: './ClassicAnimeNose/ClassicAnimeNose-Outline.png',//.svg',
        faceShade: './ClassicAnimeNose/ClassicAnimeNose-Shading.png',
      }
    },
    mouths: {
      "Bright Smile" : {
        outline: './BrightSmile/BrightSmile-Outline.png',
        faceShade:  './BrightSmile/BrightSmile-Shading.png',
      }
    },
    faceDetails: {},
    torsoLegs: {
      'Busty Not Muscular': {
        outline:'./Body-Layers/OutlineA.svg',
        gradient: './Body-Layers/GradientA.svg',
        blush: './Body-Layers/Blush.svg',
        darkShade: './Body-Layers/ShadingADark.svg',
        lightShade: './Body-Layers/ShadingALight.svg',
      }
    },
    backArms: {
      'Skinny': {
        outline:'./Body-Layers/OutlineB.svg',
        gradient: './Body-Layers/GradientB.svg',
        blush: './Body-Layers/Blush.svg',
        darkShade: './Body-Layers/ShadingBDark.svg',
        lightShade: './Body-Layers/ShadingBLight.svg',
      }
    },
    frontArms: {
      'Skinny':  {
        outline:'./Body-Layers/OutlineB.svg',
        gradient: './Body-Layers/GradientB.svg',
        blush: './Body-Layers/Blush.svg',
        darkShade: './Body-Layers/ShadingBDark.svg',
        lightShade: './Body-Layers/ShadingBLight.svg',
      }
    }

  }
}
export default data;