import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
const styles = theme => ({

    box : {
        // border : '1px solid red',
        minHeight : '300px' ,
        margin : '20px 0 ',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding: '50px 0'
        

    },
    post : {
        // border: '1px solid green',
        minHeight : '400px' ,
        padding : '10px 0',
        width : '400px',
        position : 'relative'
    },
    post_img : {
        width : '100%',
        height : '65%',
        position : 'absolute',
        top : '0',
        right : '0',
        objectFit : 'contain'
    },
    post_caption : {
        width : '100%',
        height : '35%',
        position : 'absolute',
        bottom : '0',
        right : '0',
        background : '#EB452F',
        color : 'white',
        padding : '5px 10px'
    }
   
})
class WorkShop extends Component {
    render (){
        const postInfo = this.props.postInfo
        const {classes} = this.props;
        return(
            <Grid items  xs={12}  md={4} sm={6} className={classes.box}>
                <figure className={classes.post}>
                    <img src={postInfo.image} className={classes.post_img}/>
                    <figcaption className={classes.post_caption}>
                        <h4>{postInfo.title}</h4>
                        <p style={{fontSize : '13px'}}>{postInfo.description}</p>
                    </figcaption>
                </figure>
            </Grid>
        )
    }
}
export default withStyles(styles)(WorkShop)