import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class NewCourse extends Component {

    state = {
        name: '',
        description :''
    }

    handleChange = (key, value)=>{
        this.setState({
            [key]: value
        })
    }

    handleSave = () => {

    }

    handleCancel  = () => {
        console.log('pushed')
        this.props.history.push('/')
    }


  render() {
    return (
          <Grid container spacing={16} justify="center">
            <Grid item xs={12} sm={6} lg={3}>
              <form noValidate autoComplete="off">
                <Input
                        id="name"
                        placeholder="Enter course Name"
                        value={this.state.name}
                        onChange={e => this.handleChange('name', e.target.value)}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        value={this.state.description}
                        onChange={e => this.handleChange('description', e.target.value)}
                        margin="normal"
                        />


                    <Button variant="contained" color="primary">
                        Save course
                    </Button>
                    <Button variant="contained" color="secondary" onClick={()=>this.handleCancel()}>
                        Cancel
                    </Button>
              </form>
            </Grid>
          </Grid>
    );
  }
}

export default NewCourse;
