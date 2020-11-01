import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App/App.css';

class ReviewFeedback extends Component {
    
    nextPage = () => {
        console.log('review Feedback');
        
        this.props.dispatch({type: 'SET_FEEDBACK', payload: [this.props.reduxState.feeling,
            this.props.reduxState.understanding,this.props.reduxState.support,
            this.props.reduxState.comments]});
        
    axios({
        method: 'Post',
        url:'/'
        data:{
            this.props.reduxState.feelingReducer,
            this.props.reduxState.understandingReducer,
            this.props.reduxState.supportReducer,
            this.props.reduxState.commentsReducer
        }
    }).then((response)=>{
        console.log(response.data);
      }).catch((error) =>{
        console.log(error);
      });

      this.props.history.push('/SubmitFeedback');
    }
     
    
  

    render() {
        return (
            <>
                <h2>Review your Feedback</h2>
                <ul className='ReviewFeedback'>
                    <li>{this.props.reduxState.feelingReducer}</li>
                    <li>{this.props.reduxState.understandingReducer}</li>
                    <li>{this.props.reduxState.supportReducer}</li>
                    <li>{this.props.reduxState.commentsReducer}</li>
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