import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
const styles = theme =>({
    root : {
        width : '173px',
        height : '60px',
        border : '2px solid #0a57a9',
        position : 'relative',
        padding : '10px',
        margin :'-41px -82px',
        // borderRadius : '50%',
        textAlign : 'center',
        // lineHeight :'60px',
        float : 'left',
        borderRadius : '5px'


    },
    arrow : {
        width :'60px',
        transform : 'rotate(90deg)',
        position : 'absolute',
        right : '33%',
        bottom : '-43px',
        
    },
    innerWrap : {
       
        height :'100%',
        textAlign : 'center',
        '& p' : {
            textTransform :'capitalize'

        }
        
    
  },
})
class Rectangle extends Component {
    render (){
        const {classes} = this.props;
        return (
            <Grid items className={classes.root}>
                        <Grid xs={12} container direction='column' justify='center' alignItems='center' className={classes.innerWrap}>
                        <p>
                    {this.props.info.title}
                </p>
                <img src={'../../static/images/arrow.png'} className={classes.arrow}/>


</Grid>
               
            </Grid>
        )
    }
}
export default withStyles(styles)(Rectangle)