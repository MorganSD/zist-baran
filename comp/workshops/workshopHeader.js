import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

// import { url } from 'inspector';
const styles = theme =>({
    root : {
        height : 'calc(100vh - 100px)',
        // border : '1px solid red',
        marginTop : '100px',
        position : 'relative',
        zIndex : '1' ,

        backgroundImage : `url('../../static/images/Workshop2.png')`,
        backgroundSize : 'cover',
        '&::after' : {
            content : '""',
            display :'block',
            width : '100%',
            height : '100%',
            position : 'absolute',
            top : '0',
            right : '0',
            background : 'rgba(128, 128, 128, 0.5)',
            // zIndex : 2
        },  
       
    },
    title : {
        position : 'relative',
        zIndex : '9',
        textAlign : 'center',
        color : 'white',
        width : '70%'
         
        
    },
    title_h1 : {
        fontSize : '50px'
    },
    title_p :{
        fontSize : '20px'
    },
    title_button : {
        width : '200px',
        height : '50px',
        borderRaduis : '5px',
       
    }
    
  
})
class WorkshopHeader extends Component {
    render(){
        const {classes} = this.props;
        const header = this.props.info
        return (
            <Grid container xs={12} justify='center' alignItems='center' className={classes.root}>
             <div  className={classes.title}>
             <h1 className={classes.title_h1}>{header.title}</h1>
               <p className={classes.title_p}>{header.description}</p>
               <Button href='#' variant='title_button' size='medium' color='primary' className={classes.title_button}>تقویم کارگاه ها</Button>
             </div>
               
            </Grid>
        )
    }
}
export default withStyles(styles)(WorkshopHeader)