import React, { Component } from "react";
// import { FormControl, TextField ,Grid,AccountCircle} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
// import ThemeProvider  from  "@material-ui/core";
import Link from "next/link";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Layout from "../general/layout";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailIcon from "@material-ui/icons/Mail";
import TitleIcon from "@material-ui/icons/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";

const styles = theme => ({
  _input: {
    minWidth: "100% ",
    // border :'1px solid red',
    direction: "rtl",
    height: "60px",
    margin: "20px 0 15px"
  },
  inner_input: {
    height: "100%"
  },
  contain: {
    marginLeft: "20px"
  },
  label: {
    width: "100%",
    color: "black",
    fontSize: "12px",
    marginBottom: "10px"
  },
  imageIcon: {
    width: "25px",
    marginLeft: "10px"
    // height : '40px'
  },
  imageSelect: {
    position: "absolute",
    width: "25px"
  },
  button: {
    width: "300px",
    backgroundColor: "#0A57A9",
    margin : '20px 0 ',
    height : '50px',
    fontSize : '14px'
  },
  linkStyle : {
    display : 'block',
    width : '100%',
    height : '100%'
  }
});


class ContactInfo extends Component {
  // const classes = innerStyle();
  constructor() {
    super();
    this.state = {
      errors : []
    };
  }
  titleOnChange = () => {
    this.setState({
      title: value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        {/* <ThemeProvider theme={theme_signUp}> */}
          <form id="contactForm">
            <Grid
              //  className={classes.contain}
              container
              xs={12}
              direction="row"
              justify="space-evenly"
              alignItems="center"
              // style={{ border: "1px solid red" }}
            >
              <Grid items xs={5}>
                <TextField
                  className={classes._input}
                  placeholder="نام و نام خانوادگی"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityIcon />
                      </InputAdornment>
                    )
                  }}
                />
                {/* <TextField
                  className={classes._input}
                  id="name"
                  placeholder="عنوان"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    )
                  }}
                /> */}

                <TextField
                  select
                  className={classes._input}
                  // placeholder = 'استان'
                  // label="With Select"
                  // className={clsx(classes.margin, classes.textField)}
                  // value={values.weightRange}
                  // onChange={this.titleOnChange(value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  <MenuItem selected>عنوان</MenuItem>
                  <MenuItem value="dr">دکتر</MenuItem>
                  <MenuItem value="phd">پروفسور</MenuItem>
                  {/* <MenuItem value={30}>مهندس</MenuItem> */}
                </TextField>

                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="ایمیل"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <span className={classes.label}>
                  بعنوان نام کاربری استفاده میشود
                </span>
                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="تلفن همراه"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIphoneIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <span className={classes.label}>
                  یرای تایید و اطلاعیه های بعدی مورد استفاده قرار می گیرد{" "}
                </span>

                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="تلفن"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid items xs={5}>
                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="نام آزمایشکاه"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={"../../static/images/lab-microscope.png"} className={classes.imageIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="آدرس"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={"../../static/images/map-marker.png"} className={classes.imageIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                {/* <TextField
                  className={classes._input}
                  id="name"
                  placeholder="استان"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={states} className={classes.imageIcon} />
                      </InputAdornment>
                    )
                  }}
                /> */}
                {/* <InputLabel htmlFor="age-native-simple">استان</InputLabel> */}
                {/* <Select
                IconComponent={() => (
                  <img src={states} className={classes.imageSelect} />
                  )}
                  // value={values.age}
                  // onChange={handleChange}
                  inputProps={{
                    name: "استان",
                    id: "age-simple"
                  }}
                >
                  <MenuItem>استان</MenuItem>
                  <MenuItem value={10}>تهران</MenuItem>
                  <MenuItem value={20}>اصفهان</MenuItem>
                  <MenuItem value={30}>شیراز</MenuItem>
                </Select> */}
                <TextField
                  select
                  className={classes._input}
                  placeholder="استان"
                  // label="With Select"
                  // className={clsx(classes.margin, classes.textField)}
                  // value={values.weightRange}
                  // onChange={handleChange("weightRange")}
                  InputProps={{
                    startAdornment: (
                      <img src={"../../static/images/home-city.png"} className={classes.imageSelect} />
                    )
                  }}
                >
                  <MenuItem>استان</MenuItem>
                  <MenuItem value={10}>تهران</MenuItem>
                  <MenuItem value={20}>اصفهان</MenuItem>
                  <MenuItem value={30}>شیراز</MenuItem>
                  {/* {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                </TextField>
                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="بخش"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={"../../static/images/pie-chart.png"} className={classes.imageIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes._input}
                  id="name"
                  placeholder="شهر"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={"../../static/images/city.png"} className={classes.imageIcon} />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Link herf="/signup/intrest" className={classes.linkStyle}>
                  <a>ادامه</a>
                </Link>
              </Button>
            </Grid>
          </form>
        {/* </ThemeProvider> */}
        {/* <style jsx>{`
        #contactForm {
         display : flex
        }
        #contactForm input{
            width : 100%,
            height : 40px
        }
      `}</style> */}
      </Layout>
    );
  }
}

export default withStyles(styles)(ContactInfo);
