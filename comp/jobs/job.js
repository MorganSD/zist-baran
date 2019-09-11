import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"

const styles = theme =>({
    wrap : {
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",
        minHeight : '200px',
        margin : '20px 0',
        borderRadius : '3px',
        overflow : 'hidden'
    },
    header : {
        width : '100%',
        height : '60px',
        // border : '1px solid black',
        position : 'relative',
        overflow : 'hidden',

        '&:after' : {
            content : '""',
            display : 'block',
            width : '100px',
            height : '60px',
            borderRadius : '30px',
            background : '#61A9F5',
            position : 'absolute',
            top : '0',
            right : '-45px',
            zIndex : '3'
        }
    },
    header_detial : {
        display : 'block',
        width : '50%',
        height : '100%',
        position : 'relative',
        float : 'right',
       '& p' : {
        //    lineHeight : '60px',
           textAlign : 'center',
           fontSize :'18px',
           fontWeight : 'bold',
           
           },
           
       },
       first_p :{
        '&:after' : {
            content : '""',
            display : 'block',
            width : '1px',
            height : '40px',
            background : 'rgb(178 , 178 , 178)',
            position : 'absolute',
            left : '0',
            top : '10px'
       },
       marginRight : '40px'
    },
    header_img : {
        width : '35px',
        position : 'absolute',
        top : '10px',
        right : '5px',
        zIndex : '4'
       
    },
    content : {
        width : '100%',
        height : 'calc(100% - 60px)',
        // border : '1px solid red',
        padding : '10px 20px',
        textAlign : 'justify'
    },
    button : {
        width : '60%',
        height : '40px',
        background : '#0A57A9',
        color : 'white',
        marginRight : '20%',
        margin : '10px 0'
    }
})
class Job extends Component{
    render(){
        const {classes} = this.props;
        const info = this.props.info
        return (
            <Grid items xs={5} className={classes.wrap}>
                <div className={classes.header}>
                    <span className={classes.header_detial}>
                        <img src={'../../static/images/job-opportunities.png'} className={classes.header_img }/>
                        <p className={classes.first_p}>{info.code}</p>
                    </span>
                    <span className={classes.header_detial}>
                        <p>{info.title}</p>
                    </span>
                </div>
                <div className={classes.content}>
                    <p>{info.description}</p>
                    <Button variant='contained' className={classes.button}>ثبت</Button>
                </div>
            </Grid>
        )
    }
}
export default withStyles(styles)(Job)
