import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/countReducer'
import messagesReducer from '../reducers/messageReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        messages: messagesReducer
    }))
    return store 
}

export default configureStore