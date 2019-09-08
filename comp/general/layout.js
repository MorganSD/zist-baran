import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Container";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// const theme = createMuiTheme({
//   direction: "rtl",
//   // palette: {
//   //   primary: {
//   //     main: "#0A57A9"
//   //   },
//   //   background: {
//   //     default: "white"
//   //   }
//   // }
// });
const useStyle = makeStyles({
  root: {
    width: "100%"
  },

  
});
export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
        
          {this.props.children}
        </CssBaseline>
      </React.Fragment>
    );
  }
}
