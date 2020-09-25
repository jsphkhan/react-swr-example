import React from 'react';
import './App.css';
import Home from './components/Home';
import BookDetails from './components/BookDetails';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details/:id" exact>
            <BookDetails />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
