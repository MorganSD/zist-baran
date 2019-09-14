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


    },
    arrow : {
        width : '70px',
        // height : '100px',
        transform : 'rotate(45deg)',
        position : 'absolute',
        bottom: '10px',
        right: '-15px'
    }
})
class Sample extends Component {
    render (){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <p>Sample</p>
                <img src={'../../static/images/insight.png'} className={classes.arrow}/>
            </div>
        )
    }
}
export default withStyles(styles)(Sample)