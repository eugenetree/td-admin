import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Counter } from './features/counter/Counter'

import LayoutGlobal from '@layouts/LayoutGlobal'
import LayoutAdmin from '@layouts/LayoutAdmin'

import Auth from '@pages/Auth'
import Admin from '@pages/Main'

import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import styled from 'styled-components'

function App() {
  return (
    <div className="app">
      <StylesProvider injectFirst>
        <CssBaseline/>
        <LayoutGlobal>
          <Switch>
            <Route path={['/login']} exact component={Auth}/>

            <Route>
              <LayoutAdmin>
                <Admin/>
              </LayoutAdmin>
            </Route>
          </Switch>
        </LayoutGlobal>
      </StylesProvider>
    </div>
  );
}

export default App;
