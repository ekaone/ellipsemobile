import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { 
  PageLanding,
  PageLogin,
  PageTasks,
  PageForgotPassword 
} from './components'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={PageLogin} />
        <Route path="/page-landing" component={PageLanding} />
        <Route path="/page-tasks" component={PageTasks} />
        <Route path="/page-forgotpassword" component={PageForgotPassword} />
      </Router>
    </>
  );
}

export default App;
