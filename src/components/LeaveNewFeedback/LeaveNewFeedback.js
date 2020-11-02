import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageOne extends Component {

    nextPage = () => {
        console.log('check');
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h2>Thank you!</h2>
                <div>
                    <button onClick={this.nextPage}>Leave New Feedback</button>
                </div>

            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(PageOne);