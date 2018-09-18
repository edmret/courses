import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardCourse from './elements/CardCourse'

class Home extends Component {
  render() {
    return (
          <Grid container spacing={16} justify="center">
            <Grid item xs={12} sm={6} lg={3}>
              <CardCourse />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardCourse />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardCourse />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardCourse />
            </Grid>
          </Grid>
    );
  }
}

export default Home;
