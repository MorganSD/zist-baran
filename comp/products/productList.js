import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Product from './product';
import Sidebar from './sidebar';
const styles = theme =>({
    chart_header : {
        width : '100%',
        direction :'ltr',
        padding : '0 10px',
        color : 'grey'
    }
})
class ProductList extends Component {
    render (){
        const posts = [
            {
                title : 'RNAlater rna stabilization Reagnet (50ml)',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                , catNum : 2000,

            },
            {
                title : 'RNAlater rna stabilization Reagnet (50ml)',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                , catNum : 2000,
                
            },
            {
                title : 'RNAlater rna stabilization Reagnet (50ml)',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                , catNum : 2000,
                
            },
            {
                title : 'RNAlater rna stabilization Reagnet (50ml)',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                , catNum : 2000,
                
            },
            {
                title : 'RNAlater rna stabilization Reagnet (50ml)',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                , catNum : 2000,
                
            }
        ]
        const cat = [
            {
                title : 'RNA stabilization',
                filters : [
                    'cells' , 'saliva' , 'tissue' , 'bacteria'
                ]
            },
            {
                title : 'RNA stabilization',
                filters : [
                    'cells' , 'saliva' , 'tissue' , 'bacteria'
                ]
            },
            {
                title : 'RNA stabilization',
                filters : [
                    'cells' , 'saliva' , 'tissue' , 'bacteria'
                ]
            },
            {
                title : 'RNA stabilization',
                filters : [
                    'cells' , 'saliva' , 'tissue' , 'bacteria'
                ]
            }
        ]
        const {classes} = this.props;
        return (
            <Grid container xs={12} direction='column'>
                <Grid items xs={12}></Grid>
                <Grid container xs={12}  justify='space-evenly'>
                    <Grid items xs={7}>
                        <Grid container xs={12} direction='row' justify='space-between'>
                            <Grid container xs={4} justify='space-between'>
                                <Grid items xs={6}><p className={classes.chart_header}>Number</p></Grid>
                                <Grid items xs={6}><p className={classes.chart_header}>Cat. No.</p></Grid>
                            </Grid>
                            <Grid items xs={7} xs={4} ><p className={classes.chart_header}>Description</p></Grid>
                        </Grid>
                        {posts.map(post =>(
                            <Product info={post} />
                        ))}
                    </Grid>
                    <Grid items xs={4}>
                        <Sidebar category={cat}/>
                    </Grid>
                </Grid>
                
            </Grid>
        )
    }
}
export default withStyles(styles)(ProductList)