const appStyle = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    width: "100%",
    textAlign: "center",
    // Handle non-square image. The property isn't supported by IE 11.
    objectFit: "contain",
    backgroundSize: "contain",
    borderBottomStyle: "solid",
    borderWidth: 1
  },
  tableMid: {
    display: "inline-block",
    minWidth: "32%",
    textAlign: "left"
  },
  divMind: {
    width: "100%",
    marginTop: 10
  }
});

export default appStyle;
