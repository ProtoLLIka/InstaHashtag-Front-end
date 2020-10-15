import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HashtagSearch from './component/hashtagSearch'
export const serverURL = 'http://localhost:4000'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/post" component={HashtagSearch} />
        </Switch>
      </Router >
    </div >
  );
}

export default App;
