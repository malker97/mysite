import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import SocialMedia from './socialmeida';

const styles = theme => ({

  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});
const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'courseNum',
      headerName: 'Course Number',
      width: 150,
      editable: true,
    },
    {
      field: 'courseName',
      headerName: 'Course Name',
      width: 300,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Grade',
      type: 'text',
      width: 110,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 480,
    },
  ];
  
  const rows = [
    { id: 1, courseNum: 'CS410P', courseName: 'Blockchain Development and Security', age: 'B',description:'null' },
    { id: 2, courseNum: 'CS492', courseName: 'Malware Reverse Engineering', age: 'A',description:'null'  },
    { id: 3, courseNum: 'CS495', courseName: 'Web and Cloud Security', age: 'B' ,description:'null' },
    { id: 4, courseNum: 'CS494P', courseName: 'Internetworking Protocols', age: 'A' ,description:'null' },
    { id: 5, courseNum: 'CS410P', courseName: 'Front-End Web Development', age: 'A' ,description:'null' },
    { id: 6, courseNum: 'CS486', courseName: 'Introduction to Database Management Systems', age: 'B' ,description:'null' },
    { id: 7, courseNum: 'CS554', courseName: 'Software Engineering', age: 'B' , description:'null' },
    { id: 8, courseNum: 'CS565', courseName: 'Full-Stack Web Development', age: 'A' , description:'null' },
    { id: 9, courseNum: 'CS584', courseName: 'Algorithm DES/ANLYS', age: 'A' , description:'null' },
  ];
const techstack = [
    {id: 1, name: 'React.js', imglink: "https://res.cloudinary.com/practicaldev/image/fetch/s--MLrhag65--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png",description: 'Front End Framework'},
    {id: 2, name: 'Express.js', imglink: "https://miro.medium.com/max/1400/0*bmq42b-t3O56QKNM.jpg",description: 'Back End Framework'},
    {id: 3, name: 'Material UI', imglink: "https://mui.com/static/logo.png",description: 'Open Sources FE package'},
    {id: 4, name: 'React-Bootstrap', imglink: "https://miro.medium.com/max/1400/1*5Jv5YAGqu3zL5endb8dtBA.png",description: 'Open Sources FE package'},
    {id: 5, name: 'Material UI', imglink: "https://sites.google.com/a/editorblogger.com/diplomado-implementacion-de-aulas-virtuales/_/rsrc/1472474322323/home/Google-Calendar-icon.png",description: 'Open Sources FE package'},
    {id: 6, name: 'Socket.io', imglink: "https://miro.medium.com/max/812/0*xAADmPJN52Yy6XJV.jpg",description: 'a JavaScript library for realtime web applications.'},
    {id: 7, name: 'Wireshark', imglink: "https://www.freecodecamp.org/news/content/images/2020/08/wireshark-1.png",description: 'Wireshark is a free and open-source packet analyzer.'},
    {id: 8, name: 'IDA Pro', imglink: "https://static10.tgstat.ru/channels/_0/b1/b12c398dc2dcd30371b30a19c9f7cebb.jpg",description: 'A static reverse engineering software'},
    {id: 9, name: 'VScode', imglink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",description: 'IDE'},
    {id: 10, name: 'Xcode', imglink: "https://developer.apple.com/news/images/og/xcode-12-og.jpg",description: 'IDE'},

];
const platfrom = [
    {id: 1, name: 'GCP', imglink: "https://www.gstatic.com/devrel-devsite/prod/v70c9aa38be5a41f2acdfd6deb7424dc7b523d8a488274535f707585ca8d2cdd3/cloud/images/social-icon-google-cloud-1200-630.png",description: ''},
    {id: 2, name: 'AWS', imglink: "https://pbs.twimg.com/profile_images/1473756532827246593/KRgw2UkV_400x400.jpg",description: ''},
    {id: 3, name: 'AliCloud', imglink: "https://yt3.ggpht.com/ytc/AKedOLSdHQYbvucDDyJCTi2vW-_UtFdqnYXLJuoqDQPT9A=s900-c-k-c0x00ffffff-no-rj",description: ''},
    // {id: 2, name: 'GCP', imglink: "",description: ''},
    // https://yt3.ggpht.com/ytc/AKedOLSdHQYbvucDDyJCTi2vW-_UtFdqnYXLJuoqDQPT9A=s900-c-k-c0x00ffffff-no-rj
];
const educations = [
    {id: 1, name: 'PSU', imglink: "https://yt3.ggpht.com/ytc/AKedOLSQxpuZL1eTtrqvXUzK4k-vGiK5Q4s5ELTHCRcguw=s900-c-k-c0x00ffffff-no-rj",description: ''},
    {id: 2, name: 'CCUT', imglink: "data:image/jpeg;base64,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",description: ''},
];
const languages = [
    {id: 1, name: 'C++', imglink: "https://www.codeguru.com/wp-content/uploads/2003/02/C-tutorials.jpg",description: ''},
    {id: 2, name: 'Solidity', imglink: "https://2.bp.blogspot.com/-VgxmDExB9ZI/XDHG-MnLwlI/AAAAAAAAYuY/TBA-DpZkEvEhGrbZvgVahqJkIuIu-ZCUgCLcBGAs/s1600/0_yqbRInqX0ZRUlVS0.png",description: ''},
    {id: 3, name: 'Python', imglink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",description: ''},
];

function About(props) {
  const { classes } = props;
//   componentDidMount() {
//     document.title = "About";
//   }
    useEffect(() => {
        document.title = "About Me"
    }, []);
  return (
    <React.Fragment> 
      <CssBaseline />
      <main >
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Zhengmao Zhang
            </Typography>
            <SocialMedia/>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {/* Thank you for your interest in our project, This WebApp is a web-hosted service that allow multiple users to edit the same calendar event at the same time. */}
                hi, It's Zhengmao Zhang. I'm currently pursuing a master's degree in computational science at Portland State University. I got my two bachelor's degrees from Portland State University and Changchun University of Technology in 2021. Here are some of the courses I have taken:
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                // rowsPerPageOptions={[10]}
                // checkboxSelection
                disableSelectionOnClick
            />
        </div>
        </div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
              About Tech Stack
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Framework or Software
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {techstack.map(card => (
              <Grid item key={card} sm={4} md={4} lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imglink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Platfrom
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {platfrom.map(card => (
              <Grid item key={card} sm={3} md={3} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imglink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Education
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {educations.map(card => (
              <Grid item key={card} sm={6} md={6} lg={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imglink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Languages
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {languages.map(card => (
              <Grid item key={card} sm={4} md={4} lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imglink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);