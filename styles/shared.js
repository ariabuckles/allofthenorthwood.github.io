const color = {
  black: "#333",
  greyDark: "#888",
  grey: "#aaa",
  greyLight: "#ccc",
  white: "#fff",

  green: "#778547",
  greenLight: "#9FAE59",
};
const font = {
  serifFamily: "Lora, serif",
  sansFamily: "Lato, sans-serif",
  monoFamily: "'Source Sans Pro', monospace",
  largeSize: 50,
  lessLargeSize: 30,
  largeLineHeight: 1.2,
  contentSize: 20,
  mediumSize: 16,
  smallSize: 14,
  lineHeight: 1.6,
};
const layout = {
  maxWidth: 700,
  padding: 20,
};
const link = {
  color: color.greenLight,
  fontFamily: font.sansFamily,
  fontSize: font.smallSize,
  textDecoration: "none",
  textTransform: "uppercase",
  ":hover": {
    color: color.green,
  },
  ":focus": {
    color: color.green,
  },
  ":active": {
    color: color.green,
  },
};

const accentText = {
  color: color.grey,
  fontFamily: font.sansFamily,
  fontSize: font.smallSize,
  textTransform: "uppercase",
};

module.exports = {
  accentText: accentText,
  color: color,
  font: font,
  layout: layout,
  link: link,
};