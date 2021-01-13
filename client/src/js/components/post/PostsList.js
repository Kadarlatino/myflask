import React, {Component} from 'react'
import { connect } from "react-redux"
import store from '../../store/index'
import PostsListItem from './PostsListItem'

const mapStateToProps = state => {
  return { posts: state.posts };
};


class PostsListComponent extends Component {
  state = {
    data: null,
    posts: store.getState().posts
  };

  // state = this.getCurrentStateFromStore()

  getCurrentStateFromStore() {
    //console.log(store.getState().posts);
    // return store.getState().posts;

    return {
      posts: store.getState().posts
    }

    //this.setState();
  }

  componentDidMount() {
    const API = 'http://127.0.0.1:5000/';

    // fetch(API).then((response) => response.json()).then((data) => {
    //   this.setState({posts: data});
    // });
  }

  render() {
    console.log(store.getState().posts);
    console.log(this.state);
    return (
      <>
        {
          this.state.posts == null ? (
            <div>Loading...</div>
          ):
          this.state.posts.map((post, index) => {
            return (
              <PostsListItem title={post[2]} date={post[1]} content={post[3]} key={index} id={post[0]} />
            )
          }
        )}
      </>
    )
  }
}

const PostsList = connect(mapStateToProps)(PostsListComponent);
export default PostsList;
