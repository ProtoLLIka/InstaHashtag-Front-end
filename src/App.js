import React from 'react';
import TopProfile from './component/topProfile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export const serverURL = 'http://localhost:3000'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/post" component={TopProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
