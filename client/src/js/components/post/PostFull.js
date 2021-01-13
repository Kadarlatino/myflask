import React, {Component, useEffect} from 'react'
import { withRouter } from "react-router"

class PostFull extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    const API = `http://127.0.0.1:5000/${id}`;


    fetch(API).then((response) => response.json()).then((data) => {
      this.setState({data: data[0]});
    });
  }

  render() {
    return (
      <>
        {
          this.state.data == null ? (<h1>Loading...</h1>):(
            <article>
              <h1>{this.state.data[2]}</h1>
              <span>{this.state.data[1]}</span>
              <p>
                {this.state.data[3]}
              </p>
            </article>
          )
        }
      </>
    )
  }

}

export default withRouter(PostFull)


// <h1>{this.props.title}</h1>
// <span className="date">{this.props.date}</span>
// <p>
//   {this.props.content}
// </p>
