import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
const styles = theme =>({
    root : {
        width : '100px',
        height : '120px',
        // border : '1px solid red',
        position : 'relative',
        padding : '10px',
        float : 'left',
        top : '-50px'
,
        '& p' :{
            float : 'left'
        }

    },
    arrow : {
        width : '70px',
        // height : '100px',
        transform : 'rotate(-45deg)',
        position : 'absolute',
        bottom: '10px',
        left: '-15px'
    }
})
class Insight extends Component {
    render (){
        const {classes} = this.props;
        return (
            <Grid items className={classes.root}>
                <p>Insight</p>
                <img src={'../../static/images/insight.png'} className={classes.arrow}/>
            </Grid>
        )
    }
}
export default withStyles(styles)(Insight)