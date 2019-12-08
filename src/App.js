import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';


import { 
  SocketIO,
  PageLanding,
  PageLogin,
  PageTasks,
  PageForgotPassword,
  PageTasksDetails,
  PageInspect,
  PageDefect,
  PageApproval,
  PageAccount,
  PageLabor,
  PageComplete,
  PageApply 
} from './components'

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={PageLogin} />
          <Route exact path="/page-landing" component={PageLanding} />
          <Route exact path="/page-approval" component={PageApproval} />
          <Route exact path="/page-tasks" component={PageTasks} />
          <Route path="/page-tasks/account" component={PageAccount} />
          <Route path="/page-tasks/labor" component={PageLabor} />
          <Route path="/page-tasks/complete" component={PageComplete} />
          <Route path="/page-tasks/apply" component={PageApply} />
          <Route path="/page-tasks/inspect/:id" component={PageInspect} /> 
          <Route path="/page-tasks/defect/:id" component={PageDefect} /> 
          <Route path="/page-tasks/:id" component={PageTasksDetails} /> 
          <Route path="/page-forgotpassword/:id" component={PageForgotPassword} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
