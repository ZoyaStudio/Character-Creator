
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
          class: ""
          },
          {url: "./gentleCurve/gentleCurve1.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve2.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve3.svg",
          class: ""
          },
          {url: "./gentleCurve/gentleCurve4.svg",
          class: ""
          },
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
          {url: "./gentleCurve/gentleCurve13.svg",
          class: ""
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
  bottoms: {
    // skinTight:
  },
  onePieces: {
    // skinTight:
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
    eyebrows: {},
    eyes: {},
    noses: {},
    mouths: {},
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