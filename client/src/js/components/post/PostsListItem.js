import React from 'react'
// import { Link, useParams } from "react-router-dom"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"

function PostsListItem(props) {
  

  return (
    <article>
      <h3>
        <Link className='SectionNavigation-Item Section' to={'/' + props.id} title={props.title}>
          {props.title}
        </Link>
      </h3>
      <span className="date">{props.date}</span>
      <p>
        {props.content}
      </p>
    </article>
  )
}

export default PostsListItem;
