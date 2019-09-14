import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Circle from './circle';
import Rectangle from './Rectangle';

class FlowChartWrapper extends Component {
    render(){
        const info = this.props.catgoryInfo
        let isLastStep = false;
        console.log(this.props.position , this.props.length)
        if(this.props.position + 1 === this.props.length){
            isLastStep = true
        }else {
            isLastStep = false
        }

        if(info.type === 'step'){
            return (
                <Circle info={info} isLastStep={isLastStep}/>
            )
        }else if (info.type === 'control'){
            return (
                <Rectangle info={info} />
            )
        }
    }
}
export default FlowChartWrapper