import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
// import { borderRadius } from "@material-ui/system";
const styles = theme =>({
    wrapper : {
        // width : '100%',
        minHeight : '200px',
        // border : '1px solid red',
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.37)",
        margin : '10px 0',
        borderRadius : '3px'
       
    },
    addToCard : {
        
        position : 'relative'

    },
    content : {
        direction : 'ltr',
        padding : '10px 15px',
    },
    cart : {
        background : '#0A57A9',
        color : 'white' ,
        width : '100%',
        borderRadius : '3px',
        position : 'absolute',
        bottom : '15px',
        right : '10px'
    },
    count : {
        position : 'absolute',
        top : '30px',
        right : '10px'
    },
    counter_wrap : {
        display : 'flex',
        flexWrap : 'row',
        // justifyContent : 'space-between'
    },
    counter_num : {
        display : 'block',
        width : '60px',
        height : '25px',
        border : '1px solid rgb(178 , 178 , 178)',
        margin : '0 5px',
        lineHeight : '25px',
        borderRadius : '3px',
        textAlign : 'center',
        fontWeight : 'bold'

    },
    counter_in_dec : {
        display : 'block',
        width : '30px',
        height : '25px',
        border : '1px solid rgb(178 , 178 , 178)',
        float : 'left',
        lineHeight : '25px',
        borderRadius : '3px',
        textAlign : 'center',
        color : 'red',
        cursor : 'pointer'



    }
})
class Post extends Component {
    render (){
        const {classes} = this.props;
        const info = this.props.info
        return(
            <Grid container xs={12} direction='row' justify='space-between' className={classes.wrapper}>
                <Grid items xs={4} className={classes.addToCard}>
                    <Grid container xs={12} className={classes.count}>
                        <Grid items xs={6} className={classes.counter_wrap}>
                            <span className={classes.counter_in_dec}>+</span>
                            <span className={classes.counter_num}>1</span>
                            <span className={classes.counter_in_dec}>-</span>
                        </Grid>
                        <Grid items xs={6} style={{direction : 'ltr'}}>
                            {info.catNum}
                        </Grid>
                    </Grid>
                    <Button  variant='contained' className={classes.cart}>افزودن به سبد خرید</Button>
                </Grid>
                <Grid items xs={7}className={classes.content}>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </Grid>
                
            </Grid>
        )
    }
}
export default withStyles(styles)(Post)
