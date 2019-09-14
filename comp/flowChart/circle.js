import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
const styles = theme => ({
  root: {
    width: "150px",
    height: "150px",
    border: "2px solid #0a57a9",
    position: "relative",
    padding: "10px",
    margin: "40px 30px",
    borderRadius: "50%",
    // textAlign: "center",
    // lineHeight: "200px",
    float: "left"
  },
  innerWrap: {
    height: "100%",
    textAlign: "center",
    "& p": {
      textTransform: "capitalize"
    }
  },
  arrow: {
    width: "60px",
    // transform : 'rotate(45deg)',
    position: "absolute",
    left: "100%",
    top: "45%"
  }
});
class Circle extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.innerWrap}
        >
          <p>{this.props.info.title}</p>

          {this.props.isLastStep ? null : (
            <img
              src={"../../static/images/arrow.png"}
              className={classes.arrow}
            />
          )}
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Circle);
