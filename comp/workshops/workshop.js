import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  box: {
    minHeight: "200px",
    margin: "20px 0 "
    // border : '1px solid black',
  },
  post: {
    //    border : '1px solid red',
    height: "100%",
    position: "relative",
    cursor : 'pointer'
  },
  img_wrapper: {
    width: "100%",
    height: "50%",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  },
  text: {
    width: "100%",
    height: "50%",
    background: "red",
    color: "white",
    padding: "0 15px",
    textAlign: "justify"
  },
  submit: {
    width: "100%",
    height: "100%",
    background: "rgba(150, 147, 147, 0.8)",
    position: "absolute",
    top: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "200px",
    height: "50px",
    borderRaduis: "5px",
    background: "#0a57a9",
    color: "white",
    margin: '20px 0'
  }
});
class WorkShop extends Component {
  constructor() {
    super();
    this.state = {
      submit: false
    };
  }
  handleHover = () =>{
      this.setState({
          submit : !this.state.submit
      })
  }
  render() {
    const postInfo = this.props.postInfo;
    const { classes } = this.props;
    return (
      <Grid
        container
        xs={12}
        md={4}
        sm={6}
        className={classes.box}
        alignItems="center"
        justify="center"
      >
        <Grid container xs={11} className={classes.post} direction="column" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <div className={classes.img_wrapper}>
            <img src={postInfo.image} />
          </div>
          <div className={classes.text}>
            <h3>{postInfo.title}</h3>
            <div>
              <p>{postInfo.description}</p>
            </div>
            {this.state.submit ? (
              <div className={classes.submit}>
                <Button variant="container" className={classes.button}>
                  ثبت نام
                </Button>
              </div>
            ) : null}
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(WorkShop);
