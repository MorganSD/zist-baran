import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from '@material-ui/core';
const styles = theme =>({
    post : {
        minHeight : '300px',
        // border : '1px solid red',
        borderRadius : '3px',
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",
        margin :'20px 0',
        position : 'relative'

    },
    wrapper : {
        objectFit : 'cover',
        height : '50%',
        // border : '1px solid black',
        position : 'relative',

        '& img' : {
            width : '100%',
            height : '100%',
            boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",

        }
    },
    content : {
        padding : '10px 20px',
        
        '& div' : {
            width : '100%',
            textAlign : 'justify',
            color : 'grey',
            fontSize : '13px'
        },
        
    },
    view : {
        display :'flex',
        alignItems : 'center',
        width : '100%',
        height : '20px',
        // border : '1px solid red',
        color : '#0A57A9',
        fontSize : '14px',
        '& img' :{
            width : '20px',
            marginLeft : '10px'

        }
    },
    button : {
        width : '100%',
        height : '50px',
        background : '#0A57A9',
        color : 'white'
    }
})
class Post extends Component {
    render(){
        const {classes} = this.props;
        const info = this.props.info
        return(
            <Grid items xs={7} className={classes.post}>
                <Grid container xs={12} direction='column'>
                    <Grid items xs={12} className={classes.wrapper}>
                        <img src={info.image}/>
                    </Grid>
                    <Grid items xs={12} className={classes.content} >
                        <h3>{info.title}</h3>
                        <span className={classes.view}>
                            <img src={'../../static/images/visits.png'}/>
                            بازدید
                        </span>
                        <div>
                            <p>{info.description}</p>
                        </div>
                        <Button variant='contained' className={classes.button}>ادامه مطلب</Button>
                    </Grid>
                    
                </Grid>
                
            </Grid>
        )
    }
}
export default withStyles(styles)(Post)