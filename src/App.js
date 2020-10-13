import React from 'react'
import { Switch, Route, useLocation, Link } from 'react-router-dom'
import { Counter } from './features/counter/Counter'
import './App.css'

import LayoutGlobal from '@layouts/LayoutGlobal'
import LayoutAuth from '@layouts/LayoutAuth'
import LayoutAdmin from '@layouts/LayoutAdmin'

import Auth from '@pages/Auth'
import Admin from '@pages/Main'

function App() {
  return (
    <div className="app">
      <LayoutGlobal>
        <Switch>
          <Route path={['/login']} exact>
            <LayoutAuth>
              <Route path="/login" exact component={Auth} />
            </LayoutAuth>
          </Route>

          <Route>
            <LayoutAdmin>
              <Admin/>
            </LayoutAdmin>
          </Route>
        </Switch>
      </LayoutGlobal>
    </div>
  );
}

export default App;
