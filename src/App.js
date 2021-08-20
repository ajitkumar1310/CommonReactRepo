import logo from './logo.svg';
import './App.css';
import React from 'react'
import LazyComponent from './components/LazyComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { ThemeContext } from './components/CreateContext'
import { ContextComponent, CreateClassComponent } from './components/ContextComponent'
import { ErrorBoundary, ErrorBoundaryComponent } from './components/ErrorBoundary'
import { ForwardRefParentComp, ForwardRefComp, ForwardRefCompNrml } from './components/ForwardRefComp'
import { HocFunctionComp } from './components/ForwardRefHOC'
function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/lazy' component={LazyComponent} />
          <Route path='/ForwardRef' component={ForwardRefParentComp} />
          <Route path='/ForwardHocRef' component={HocFunctionComp} />

          <ThemeContext.Provider value={{ theme: 'green' }}>
            <Route path='/context' component={CreateClassComponent} />
            <ErrorBoundary>
              <Route path='/ErrorBoundary' component={ErrorBoundaryComponent} />

            </ErrorBoundary>
          </ThemeContext.Provider>


          {/* <LazyComponent /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
