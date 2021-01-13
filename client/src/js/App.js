import React, {Component} from 'react'
import { Container } from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import RouterPages from './components/RouterPages'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <>
        <Container maxWidth="lg">
          <header>
            <Navigation />
          </header>
          <hr/>
          <RouterPages/>
        </Container>
      </>
    )
  }
}
// <Route path='/:id' children={PostFull} />

export default App;
