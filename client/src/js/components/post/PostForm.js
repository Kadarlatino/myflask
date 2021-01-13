import React, {Component} from 'react'
import axios from 'axios'
import { Button, TextField, Box } from '@material-ui/core'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_title: '',
      post_content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.getAttribute('name')

    this.setState({[name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    // send a POST request
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/add-post',
      data: {
        post_title: this.state.post_title,
        post_content: this.state.post_content
      }
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="POST" action="http://127.0.0.1:5000/add-post">
        <Box>
          <TextField
            id="post-title"
            type="text"
            name="post_title"
            label="Title"
            value={this.state.post_title}
            onChange={this.handleChange} />
        </Box>
        <Box>
          <TextField
            id="post-content"
            type="text"
            name="post_content"
            label="Post Content"
            value={this.state.post_content}
            onChange={this.handleChange} />
        </Box>
        <Box>
          <Button color="primary" type="submit">Submit</Button>
        </Box>
      </form>
    );
  }
}

export default PostForm;
