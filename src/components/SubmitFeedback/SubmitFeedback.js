import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageOne extends Component {

state = {
    pageOne: ''
  };

    nextPage = () => {
        console.log('check');
        // this will happen this weekend
        this.props.history.push('/');
        

    }

   
    

    render(){ 
        return(
            <>
            <h2>Thank you!</h2>
            <form >
                 <button onClick={this.nextPage}>Leave New Feedback</button>
            </form>
               
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(PageOne);