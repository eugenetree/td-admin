import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Counter } from './features/counter/Counter'

import AppLayout from '@components/_global/AppLayout'
import AppRouterConfig from '@components/_global/AppRouterConfig'

import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import useTokenChangeHandle from '@utils/hooks/useTokenChangeHandle'
import useTokenRefresh from '@utils/hooks/useTokenRefresh'

function App() {
  useTokenChangeHandle()
  useTokenRefresh()

  return (
    <div className="app">
      <StylesProvider injectFirst>
        <CssBaseline/>
        <AppLayout>
          <AppRouterConfig/>
        </AppLayout>
      </StylesProvider>
    </div>
  );
}

export default App;
