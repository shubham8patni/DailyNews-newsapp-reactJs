import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

//f64685d46cd341e69f79eae5e8fee2de
export default class App extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general',

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container py-5" style={{ maxWidth: '100vw' }}>
          <Switch>
           
              
                <Route exact path="/business">
                  <News key="Business" heading="Business" pageSize={12} country="in" category="business" />
                </Route>
                <Route exact path="/entertainment">
                  <News key="Entertainment" heading="Entertainment" pageSize={12} country="in" category="entertainment" />
                </Route>

                <Route exact path="/health">
                  <News key="Health" heading="Health" pageSize={12} country="in" category="health" />
                </Route>
                <Route exact path="/science">
                  <News keys="Science" heading="Science" pageSize={12} country="in" category="science" />
                </Route>
                <Route exact path="/sports">
                  <News key="Sports" heading="Sports" pageSize={12} country="in" category="sports" />
                </Route>
                <Route exact path="/technology">
                  <News key="Technology" heading="Technology" pageSize={12} country="in" category="technology" />
                </Route>
                <Route exact path="/">
                  <News key="Headlines" heading="Top Headlines" pageSize={12} country="in" category="general" />
                </Route>
              
            
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

