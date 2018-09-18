import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HeaderMenuComponent from './components/header/headerMenu.component'
import Home from './components/home.component'
import NewCourse from './components/form/new.component'

import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <HeaderMenuComponent />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={NewCourse} />
          </Switch>
        </main>
      </section>
    );
  }
}

export default App;
