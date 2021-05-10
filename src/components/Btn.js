import React from 'react' 
import { connect } from 'react-redux'
import { increment } from '../actions/countAction'

function Button(props) {
    return (
        <button onClick={() =>{ 
            props.dispatch(increment())
        }}> plus </button>
    )
}

export default connect()(Button)