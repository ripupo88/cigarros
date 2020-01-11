const appStyle = theme => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "blue"
  },
  nested: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(4)
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(3)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    margin: theme.spacing(3)
  },
  textField: {
    margin: theme.spacing(3)
  }
});

export default appStyle;
