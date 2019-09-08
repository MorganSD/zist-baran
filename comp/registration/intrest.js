import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const styles = theme => ({
  header: {
    height: "80px",
    width: "100%",
    borderBottom: "2px solid #6da6e2",
    textAlign: "center",
    lineHeight: "80px",
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
  },
  headerImg:{
      width : '50px',
      marginLeft : '10px'
  },
  container: {
    width: "100%",
    minHeight: "100px",
    display: "flex",
    justifyContent: "space-evenly",
    aliginItems: "center",
    margin: "25px 0 ",
    flexFlow : 'column wrap',
  },
  selectSection: {
    width: "100%",
    height: "60px",
    // Padding : '0 10px !important',

    // border : '1px solid grey',
    borderRadius: "5px",
    marginBottom: "20px",
    marginLeft: "10px",
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",
    
  },
  label : {
    // display : 'block',
    // width: '100%',
    // height : '100%',
    // position : 'absolute',
    // top : '0%'
cursor : 'pointer',
    fontSize : '18px'
},
checkBox : {
width : '30px',
height : '30px'
},
subscribee : {
    direction : 'rtl',
    width : '93%',
    height : '50px',
    margin : '10px 0',
    
} 

});
const theme_intrests = createMuiTheme({});
class Intrests extends Component {
  render() {
    const { classes } = this.props;
    const grids = [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ]
    return (
      <Grid container xs={12} justify="center" style={{marginTop : '40px'}}>
      
        <Grid
          items
          xs={11}
          style={{ border: "2px solid #6da6e2", borderRadius: "5px"}}
        
        >
          <div className={classes.header}>
          <img src={'/static/images/Group168.png'} className={classes.headerImg}/>

            <h2>محدوده مورد علاقه</h2>
          </div>
          <form className={classes.container}>
            <Grid
              container
              xs={12}
              direction="row"
              justify="space-evenly"
              aliginItems="center"
            >
             
             {grids ? grids.map(grid => (
          <Grid container xs={3} className={classes.selectSection} direction='row' alignItems='center' justify='space-evenly'>
               
               <label for='1' className={classes.label}>بیماری های عفونی</label>

              
               <Checkbox
                       icon={<CheckBoxOutlineBlankIcon fontSize="big" />}
                       checkedIcon={<CheckBoxIcon fontSize="big" />}
                       value="checkedI"
                       id = '1'
                       // iconStyle={{fill: 'blue'}}
                       labelStyle={{color: 'white'}}
                       color="grey"

               />
               


               </Grid>
        )):null}

            </Grid>
          </form>
          
        </Grid>
        <div className={classes.subscribee}>
            <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="big" />}
                        checkedIcon={<CheckBoxIcon fontSize="big" />}
                        value="checkedI"
                        id = 'subs'
                        // iconStyle={{fill: 'blue'}}
                        // labelStyle={{color: 'white'}}
                        color="blue"

                />
                <label for='subs' className={classes.label}>من میخواهم اخبار جدید را از طریق ایمیل دریافت کنم</label>
            </div>
      </Grid>
      
    );
  }
}
export default withStyles(styles)(Intrests);
