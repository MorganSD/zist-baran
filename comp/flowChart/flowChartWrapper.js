import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
// import FlowChartWrapper from './wrapper';
import Sample from './sample';
import Insight from './insight';
import Circle from './circle';
import Rectangle from './Rectangle';
import FlowChartWrapper from './wrapper';
const styles = theme => ({
    root : {
        border : '1px solid red',
        direction : 'ltr',
        padding : '20px',
        height : '350px',
        minWidth : '100vw',
        overflowX : 'scroll',
        position : 'relative',

    },
    wrapper :{
        // width : '100%',
        height : '80%',
        position : 'absolute',
        right : '0',
        bottom : '0',
        // overflowX : 'scroll',

        // border : '1px solid blue'

    }
})
class FlowChart extends Component {
    render(){
        const category = [
            {
                title : 'sample Distruption & homogenization',
                type : 'step',
                filters : ['1','2','3','4','5']
            },
            {
                title : 'sample preparation',
                type : 'step',
                filters : ['1','2','3','4','5']
            },
            {
                title : 'sample quality control',
                type : 'control',
                filters : ['1','2','3','4','5']
            },
            {
                title : 'automated assay setup',
                type : 'step',
                filters : ['1','2','3','4','5']
            },
            {
                title : 'analysis',
                type : 'control',
                filters : ['1','2','3','4','5']
            },
            {
                title : 'interpretation',
                type : 'step',
                filters : ['1','2','3','4','5']
            },

        ]
        const {classes} = this.props;
        return (
            <>
            {category != null ? (
                   <div className={classes.root}>
                       <div className={classes.wrapper}>
                           <Sample/>
                       {/* <Circle info={'title'}/>
                       <Rectangle info={'title'}/>
                       <Circle info={'title'}/>
                       <Rectangle info={'title'}/>
                       <Circle info={'title'}/> */}
                       {category.map((cat , index) => (
                           <FlowChartWrapper catgoryInfo={cat} position={index} length={category.length}/>
                       ))}
                       <Insight />
                       </div>
                   </div>
            ) : null }
            </>
        )
        
    }
}
export default withStyles(styles)(FlowChart)