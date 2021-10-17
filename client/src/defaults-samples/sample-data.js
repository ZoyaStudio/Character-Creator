
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
      upperBoundaries: [
        {}
      ],
      lowerBoundaries: [],
      necklines: [],
      seams: [],
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