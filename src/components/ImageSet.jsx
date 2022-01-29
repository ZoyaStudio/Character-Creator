// import React from 'react'

// //   white: {brightness: 3.5, saturation: 1, hue: 0, opacity: 100, contrast: 144.5},
// // creates string for filter css style from inputs
// // inputs: numbers for value of hue/saturation/briteness/contrast/opacity
// const makeFilterStyle = ({ hue, sat, brit, con, op }): string => {
//     if (
//         hue === undefined ||
//         sat === undefined ||
//         brit === undefined ||
//         con === undefined ||
//         op === undefined
//     ) {
//         // console.log('no color')
//         return `brightness(${3.5}) hue-rotate(${0}deg) saturate(${1}%) contrast(${144.5}%) opacity(${100}%)`
//     }
//     return `brightness(${brit}) hue-rotate(${hue}deg) saturate(${sat}%) contrast(${con}%) opacity(${op}%)`
// }
// // const image =
// // {
// //   outline: '',
// //   shadingA: '',
// //   shadingB: '',
// //   shadingC: '',
// //   gradientA: '',
// //   gradientB: '',
// //   gradientC: '',
// // };
// // const filters = {
// //   filterA: {},
// //   filterB: {},
// //   filterC: {}
// // }

// const ItemSet = function ItemSet({
//     images,
//     filters,
//     zCounter,
//     displayClass,
// }): JSX.Element {
//     return (
//         <>
//             {/* outline */}
//             <img
//                 alt="outline"
//                 src={images.outline}
//                 className={displayClass}
//                 style={{ zIndex: zCounter - 1 }}
//                 key="imageOutline"
//             />
//             {/* gradient */}
//             <img
//                 alt="gradient A"
//                 src={images.gradientA}
//                 className={displayClass}
//                 style={{
//                     zIndex: zCounter - 2,
//                     filter: makeFilterStyle(filters.filterA),
//                 }}
//                 key="imageGradientA"
//             />
//             {images.gradientB && (
//                 <img
//                     alt="gradient B"
//                     src={images.gradientB}
//                     className={displayClass}
//                     style={{
//                         zIndex: zCounter - 3,
//                         filter: makeFilterStyle(filters.filterB),
//                     }}
//                     key="imageGradientB"
//                 />
//             )}
//             {images.gradientC && (
//                 <img
//                     alt="gradient C"
//                     src={images.gradientC}
//                     className={displayClass}
//                     style={{
//                         zIndex: zCounter - 4,
//                         filter: makeFilterStyle(filters.filterC),
//                     }}
//                     key="imageGradientC"
//                 />
//             )}
//             {/* shading */}
//             <img
//                 alt="shading A"
//                 src={images.shadingA}
//                 className={displayClass}
//                 style={{
//                     zIndex: zCounter - 5,
//                     filter: makeFilterStyle(filters.filterA),
//                 }}
//                 key="imageShadingA"
//             />
//             {images.shadingB && (
//                 <img
//                     alt="shading B"
//                     src={images.shadingB}
//                     className={displayClass}
//                     style={{
//                         zIndex: zCounter - 6,
//                         filter: makeFilterStyle(filters.filterB),
//                     }}
//                     key="imageShadingB"
//                 />
//             )}
//             {images.shadingC && (
//                 <img
//                     alt="shading C"
//                     src={images.shadingC}
//                     className={displayClass}
//                     style={{
//                         zIndex: zCounter - 7,
//                         filter: makeFilterStyle(filters.filterC),
//                     }}
//                     key="imageShadingC"
//                 />
//             )}
//         </>
//     )

//     // }
// }
// export default ItemSet
