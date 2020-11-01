import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ReviewFeedback extends Component {
    state = {
        submitFeedback: {
            pageOne:'',
            pageTwo:'',
            pageThree:'',
            pageFour:'',


        }
    }


    nextPage = () => {
        console.log('review Feedback');
        this.props.history.push('/SubmitFeedback');
    }

    handleSubmit = () => {
        console.log('handle Submit Feedback');
        
    }

    render(){ 
        return(
            <>
            <h2>Review your Feedback</h2>
                <ul className = 'ReviewFeedback'>
                    <li>{this.props.reduxState.pageOneReducer}</li>
                    <li>{this.props.reduxState.pageTwoReducer}</li>
                    <li>{this.props.reduxState.pageThreeReducer}</li>
                    <li>{this.props.reduxState.pageFourReducer}</li>
                </ul>

                
                
                <button onClick={this.nextPage}>Submit</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(ReviewFeedback);