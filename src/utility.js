const makeFilterStyle = (hue, sat, brit, con, op) => {
  if (
    hue === undefined ||
    sat === undefined ||
    brit === undefined ||
    con === undefined ||
    op === undefined
  ) {
    return (
      "brightness(" +
      3.5 +
      ") hue-rotate(" +
      0 +
      "deg) saturate(" +
      1 +
      "%) contrast(" +
      144.5 +
      "%) opacity(" +
      100 +
      "%)"
    );
  }
  return (
    "brightness(" +
    brit +
    ") hue-rotate(" +
    hue +
    "deg) saturate(" +
    sat +
    "%) contrast(" +
    con +
    "%) opacity(" +
    op +
    "%)"
  );
};
export default makeFilterStyle;
