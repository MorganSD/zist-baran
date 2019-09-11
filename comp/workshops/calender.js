import React, { Component } from "react";
import { withStyles, mergeClasses } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
   
    width: "600px",
    height: "340px",
    margin : '40px 0'
  },
  row: {
   display : 'flex',
   flexFlow : 'row noWrap',
   justifyContent : 'space-between',
//    alignItems : 'center'
  },
  season: {
    width: "140px",
    height: "50px",
    position: "relative",
    // padding : '5px',
    borderRadius: "3px",
    marginBottom: "15px",
    cursor : 'pointer'

  },
  sections : {
      display : 'flex',
      flexWrap : 'wrap',
     justifyContent : 'space-between '
  },
  season_img: {
    width: "28px",
    position: "absolute",
    bottom: "0",
    right: "5px",
  },
  season_title: {
    lineHeight: "50px",
    float: "left",
    marginLeft: "20px",
    fontSize: "20px"
  },
  season_section: {
    width: "140px",
    height: "80px",
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",
    lineHeight: "80px",
    fontSize: "20px",
    textAlign: "center",
    margin: "5px 0 ",
    borderRadius: "3px",
    cursor : 'pointer'
  }
});
class Calender extends Component {
  render() {
    const spring = "rgba(119,180,38)";
    const { classes } = this.props;
    const seasons = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند"
    ];
    return (
      <Grid container xs={12} justify="center" alignItems="center">
        <div className={classes.root}>
          <Grid
            items
            xs={12}
           className={classes.row}
          >
            <div
              className={classes.season}
              style={{ boxShadow: "0px 1px 3px 0px rgba(119,180,38, 0.37)" }}
            >
              <img
                src={"../../static/images/blossom.png"}
                className={classes.season_img}
                style={{ filter: "drop-shadow(0 0 0.05rem #77B426)"
            }}
              />
              <span style={{ color: spring }} className={classes.season_title}>
                بهار
              </span>
            </div>

            <div
              className={classes.season}
              style={{ boxShadow: "0px 1px 3px 0px rgba(199, 57, 38, 0.37)" }}
            >
              <img
                src={"../../static/images/sunny.png"}
                className={classes.season_img}
                style = {{filter : "drop-shadow(0 0 0.05rem #C73926)"}}
            
              />
              <span style={{ color: '#C73926' }} className={classes.season_title}>
                تابستان
              </span>
            </div>

            <div
              className={classes.season}
              style={{ boxShadow: "0px 1px 3px 0px rgba(233, 126, 47, 0.37)" }}
            >
              <img
                src={"../../static/images/leaves.png"}
                className={classes.season_img}
                style ={{filter : "drop-shadow(0 0 0.05rem #E97E2F)"}}
              />
              <span style={{ color: '#E97E2F' }} className={classes.season_title}>
                پاییز
              </span>
            </div>

            <div
              className={classes.season}
              style={{ boxShadow: "0px 1px 3px 0px rgba(111, 167, 223, 0.37)" }}
            >
              <img
                src={"../../static/images/snowflake.png"}
                className={classes.season_img}
                style = {{filter : "drop-shadow(0 0 0.05rem #6FA7DF)"}}
              />
              <span style={{ color: '#6FA7DF' }} className={classes.season_title}>
                زمستان
              </span>
            </div>
          </Grid>
          <Grid items xs={12} className={classes.sections} >
              {seasons.map(season => (
                  <div className={classes.season_section}>{season}</div>
              ))}
          </Grid>
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(Calender);
