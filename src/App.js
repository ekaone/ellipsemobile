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
  PageForgotPassword,
  PageTasksDetails 
} from './components'

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/page-landing" component={PageLanding} />
        <Route exact path="/page-tasks" component={PageTasks} />
        <Route path="/page-tasks/:id" component={PageTasksDetails} /> 
        <Route path="/page-forgotpassword/:id" component={PageForgotPassword} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
