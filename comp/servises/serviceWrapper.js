import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Service from './service';

const styles = (theme) =>({
    root : {
        padding : '50px 0',
        // border : '1px solid red',
    },
    wrapper : {
        minHeight : '100px',
        height : 'auto'
        // background : 'red',
    },
    title : {
        textAlign : 'center',
        marginBottom : '50px'
    }
})
class ServiceWrapper extends Component {
    static async getInitialProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'get' ,

        })
        const posts = await res.json()
        return { posts }
      }
      componentWillMount() {
        this.setState({
          post: this.props.posts
        })
      }
    render(){
        console.log(this.props.posts)
        // const services = [
        //     {
        //         title :'تیتر اینجا نوشته خواهد شد',
        //         description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '
        //     },
        //     {
        //         title :'تیتر اینجا نوشته خواهد شد',
        //         description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '
        //     },
        //     {
        //         title :'تیتر اینجا نوشته خواهد شد',
        //         description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '
        //     }
        // ]
        // const {services} = this.props;
        const {classes} = this.props;
        // const serviceIfnfo = this.props.show
        return(
           <Grid container xs={12} direction='column'  className={classes.root} alignItems='center'>
               <h1 className={classes.title}>خدمات زیست باران</h1>
                <Grid container xs={12} alignItems='center' justify='center' className={classes.wrapper}>
                {/* {serviceIfnfo.map(service => (
                    <Service info={service}/>
                ))} */}
               
            </Grid>
           </Grid>
        )
    }
}
// ServiceWrapper.getInitialProps = async function (){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const show = await res.json();
//     console.log(show)

//     return {show}
// }
export default withStyles(styles)(ServiceWrapper);