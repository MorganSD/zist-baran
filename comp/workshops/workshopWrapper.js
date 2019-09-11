import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import WorkshopHeader from './workshopHeader';
import WorkShop from './workshop';
const styles = theme => ({
  root : {
    border : '1px solid red'
  }
});

class WorkshopWrapper extends Component {
  render() {
    const workshop = {
       summery : {
            title: "WorkShop",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
              thumbnail : '../../static/images/Workshop2.png'
          },
          posts : [
            {
              title :'تیتر اینجا نوشته خواهد شد',
              description : ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  ',
              image : '../../static/images/Exclusion29.png'
            },
            {
              title :'تیتر اینجا نوشته خواهد شد',
              description : ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  ',
              image : '../../static/images/Exclusion29.png'
            },
            {
              title :'تیتر اینجا نوشته خواهد شد',
              description : ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  ',
              image : '../../static/images/Exclusion29.png'
            },
            {
              title :'تیتر اینجا نوشته خواهد شد',
              description : ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  ',
              image : '../../static/images/Exclusion29.png'
            },
            {
              title :'تیتر اینجا نوشته خواهد شد',
              description : ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  ',
              image : '../../static/images/Exclusion29.png'
            },
            {
              title :'تیتر اینجا نوشته خواهد شد',
              description : ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  ',
              image : '../../static/images/Exclusion29.png'
            },
          ]
    }
  
    return (
        <Grid container xs={12} justify="center" alignItems="center">
            <WorkshopHeader info={workshop.summery}/>
            <Grid container xs={12} alignItems='center'>
              {workshop.posts.map(post =>(
                <WorkShop postInfo={post} />
              ))}
            </Grid>
        </Grid>
    )
  }
}
export default withStyles(styles)(WorkshopWrapper);