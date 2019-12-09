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
  PageApply,
  PageManager,
  PageLaborWorked 
} from './components'

function App() {
  return (
    <>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={PageLogin} />
          <Route exact path="/page-landing" component={PageLanding} />
          <Route exact path="/page-approval" component={PageApproval} />
          <Route exact path="/page-tasks" component={PageTasks} />
          <Route exact path="/page-manager" component={PageManager} />
          <Route exact path="/page-tasks/labor/:id" component={PageLabor} />
          <Route exact path="/page-tasks/labor/worked/:id" component={PageLaborWorked} />
          <Route path="/page-tasks/account" component={PageAccount} />
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
