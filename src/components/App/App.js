import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SubmitFeedback from '../SubmitFeedback/SubmitFeedback';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route exact path="/" component={PageOne} />
          <Route exact path="/PageTwo" component={PageTwo} />
          <Route exact path="/PageThree" component={PageThree} />
          <Route exact path="/PageFour" component={PageFour} />
          <Route exact path="/ReviewFeedback" component={ReviewFeedback}/>
          <Route exact path="/SubmitFeedback" component ={SubmitFeedback}/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

