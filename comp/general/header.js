import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';



const styles = (theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: 'none',
      // to push it above the nav drawer
      zIndex: theme.zIndex.drawer * 2,
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });
  

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          anchorEl: null,
          mobileMoreAnchorEl: null,
          open: false,
          isMobileMenuOpen: false,
        };
      }
    
    async componentDidMount() {
        // const { dispatch } = this.props;
        // await dispatch(fetchCategoriesIfneeded());
        // await dispatch(fetchCartData());
      }
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = (event) => {
        // this.setState({ mobileMoreAnchorEl: event.currentTarget });
        this.setState({
          isMobileMenuOpen: !this.state.isMobileMenuOpen,
        });
      };
    
      handleMobileMenuClose = () => {
        // this.setState({ mobileMoreAnchorEl: null });
        this.setState({ isMobileMenuOpen: false });
      };
    
render (){
    const { classes, auth, user, data, currentTab, width } = this.props;
    const { isMobileMenuOpen } = this.state;
    const onBigScreen = isWidthUp('md', width);
    const onMobileScreen = isWidthDown('xs', width);

    return (
        <div className={classes.root}>
          <AppBar position="relative" color="inherit" className={classes.appBar}>
            <Toolbar variant="dense">
              <div className={classes.sectionMobile}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleMobileMenuOpen}
                >
                  <MenuIcon>
                    <MenuItem primaryText="Menu" />
                  </MenuIcon>
                </IconButton>
              </div>
  
              {/* <LogoHeader /> */}
  
              <div className={classes.grow} />
  
              {/* {!onMobileScreen && <SearchBar />} */}
  
              {/* <LoginAndDrawerInHeader isMobile={!onBigScreen} /> */}
            </Toolbar>
  
            {!onMobileScreen && <Divider variant="middle" />}
  
            {onMobileScreen && (
              <Toolbar component="div" variant="dense">
                <SearchBar />
              </Toolbar>
            )}
  
            {/* <CategoriesInMenu
              data={data}
              currentTab={currentTab}
              isMobile={!onBigScreen}
              drawerOpen={isMobileMenuOpen}
              closeDrawer={this.handleMobileMenuClose}
            /> */}
            <Divider variant="fullWidth" />
          </AppBar>
        </div>
      );
  
}
}
export default withStyles(styles)(withWidth()(Header))