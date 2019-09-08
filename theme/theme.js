import { createMuiTheme } from "@material-ui/core/styles";
import IRANSansWeb from '../static/fonts/IRANSansWeb.woff'

const themeFont = {
    fontFamily: 'IRANSansWeb',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    // fontWeight: 100,
    src: `
      url(${IRANSansWeb}) format('woff')
    `,
  };
  
export default createMuiTheme({

    typography: {
        fontFamily: ['IRANSansWeb'].join(','),
        fontSize: 16,
        // Tell Material-UI what's the font-size on the html element is.
        // htmlFontSize: 16,
      },
    
    palette: {
      primary: {
        main: "#0A57A9"
      },
      background: {
        default: "white"
      }
    },
    
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [themeFont],
              },
      
        },
     
      MuiInputBase: {
        // Name of the rule
        root: {
          // Some CSS
          height: "60px",
          width: "100%"
        },
        input: {
          root: {
            padding: "0 10px"
          },
          "&::placeholder": {
            padding: "0 10px"
          }
        }
      },
      MuiInput: {
        underline: {
          "&::before": {
            borderBottom: "1.5px solid #6BA7E5"
          },
          "&::after": {
            borderBottom: "2px solid #165496"
          }
        }
      },
      MuiSvgIcon: {
        root: {
          fontSize: "2.5rem",
          color: "#0A57A9"
        }
      },
      MuiMenu: {
        list: {
          // float : 'right',
          width: "100%"
        }
      },
      MuiMenuItem: {
        gutters: {
          direction: "rtl"
        }
      },
      MuiSelect: {
        select: {
          "&:focus": {
            marginRight: "30px",
            backgroundColor: "none"
          }
        },
        icon: {
          left: "0",
          right: "none"
        },
        selectMenu: {
          width: "80%"
        }
      },
      MuiButton : {
        containedPrimary :{ '&:hover' : {
          backgroundColor : '#2683e0'
        }}
      },
      MuiSvgIcon :{
        root :{
            width : '0.8em',
            height : '0.8em'
        }
      }
    }
  });