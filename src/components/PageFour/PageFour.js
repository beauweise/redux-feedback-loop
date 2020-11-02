import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageFour extends Component {
    state = {
        comments: ''
    };
    nextPage = () => {
        console.log('check');
        if (this.state.comments === "" || this.state.comments === null) {// not allowing for empty inputs
            alert('Please enter all info');
            return;
        }
        else {
            this.props.history.push('/ReviewFeedback');
            this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments });

        }
    }
    handleChange = (event) => {
        console.log('input page 4');
        if (event === "") {// not allowing for empty inputs
            alert('Please enter all info');
            return;
        }
        this.setState({
            comments: event.target.value,
        });
    }

    render() {
        return (
            <>
                <h2>Any comments you want to leave?</h2>
                <p></p>
                <form >
                    <input type="text" min="1" max="10" onChange={(event) => this.handleChange(event)} placeholder="Comment" />
                </form>
                <button onClick={this.nextPage}>Next</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(PageFour);