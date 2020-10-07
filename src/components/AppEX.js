import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/topics">Topics</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </Router>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <Link to={`${match.url}/components`}>Components</Link>
      <Link to={`${match.url}/props-v-state`}>Props v. State</Link>

      <Switch>
        <Route path={`${match.path}/:topicId`} component={Topic} />

        <Route path={match.path}> <h3>Please select a topic.</h3> </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}


function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }

export default App;