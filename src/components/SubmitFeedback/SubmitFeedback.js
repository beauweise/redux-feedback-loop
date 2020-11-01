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
        this.props.history.push('/PageOne');
        

    }

   
    

    render(){ 
        return(
            <>
            <h2>How are you feeling today?</h2>
            <form >
                 <button onClick={this.nextPage}>Next</button>
            </form>
               
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(PageOne);