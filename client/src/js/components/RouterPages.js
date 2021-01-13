import React, {useEffect} from 'react'

import PostForm from './post/PostForm'
import PostsList from './post/PostsList'
import PostFull from './post/PostFull'
import PostTest from './post/PostTest'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"


function RouterPages() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}post-test`} children={PostTest} />
      <Route exact path={path}>
        <h1>Home Blog</h1>
        <PostsList />
        <PostForm />
      </Route>
      <Route path={`${path}:id`} children={PostFull} />
    </Switch>
  )
}

export default RouterPages
