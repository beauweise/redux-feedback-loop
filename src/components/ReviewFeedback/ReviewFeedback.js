import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ReviewFeedback extends Component {

    handleSubmit = () => {
        console.log('handle Submit Feedback');
        
    }

    render(){ 
        return(
            <>
            <h2>Review your Feedback</h2>
                <p></p>
                <form onSubmit = {this.handleSubmit}>
                    
                </form>
                <button onClick={this.nextPage}>Next</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(ReviewFeedback);