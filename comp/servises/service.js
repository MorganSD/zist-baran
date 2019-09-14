import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import { Grid } from '@material-ui/core';

const styles = theme =>({
    root : {
        background : 'transparent',
        display : 'flex',
        flexFlow : 'column wrap',
        // justifyContent : 'center',
        alignItems : 'center',
        // border : '1px solid grey',
        borderRadius : '5px',
        marginRight : theme.spacing(6),
        minHeight : '200px',
        padding : '20px 10px',
        marginBottom : '20px',
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",

    },
    img : {
        width : '80px',
        marginBottom : '2px'

    },
    description : {
        textAlign :'center',
        marginTop :'10px'
    }
})

class Service extends Component{
    render(){
        const {classes} = this.props;
       const service = this.props.info
        return(
            <Grid item xs={3} className={classes.root} >
                <img src={'../../static/images/Group970.png'} className={classes.img}/>
                <h3>{service.title}</h3>
                <p className={classes.description}>{service.body}</p>

            </Grid>
        )
    }
}
export default withStyles(styles)(Service)