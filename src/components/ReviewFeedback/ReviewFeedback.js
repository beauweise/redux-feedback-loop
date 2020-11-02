import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App/App.css';

class ReviewFeedback extends Component {

    nextPage = () => {
        console.log('review Feedback');
        axios({
            method: 'Post',
            url: '/',
            data: {
                feeling: this.props.reduxState.feelingReducer,
                understanding: this.props.reduxState.understandingReducer,
                support: this.props.reduxState.supportReducer,
                comments: this.props.reduxState.commentsReducer
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
        this.props.history.push('/LeaveNewFeedback');
    }
    render() {
        return (
            <>
                <h2>Review your Feedback</h2>
                <ul className='ReviewFeedback'>
                    <li>Feelings: {this.props.reduxState.feelingReducer}</li>
                    <li>Understanding: {this.props.reduxState.understandingReducer}</li>
                    <li>Support: {this.props.reduxState.supportReducer}</li>
                    <li>Comments: {this.props.reduxState.commentsReducer}</li>
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