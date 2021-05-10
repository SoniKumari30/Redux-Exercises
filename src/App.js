	import React from 'react';
  // connect allows us to dispatch or read values from store into component
  import { connect } from 'react-redux'
  import Messages from './components/Messages'
  
  // import Btn from './components/Btn'
  // import { increment } from './actions/countAction'
  
  function App(props) {
    return (
     <div>
      <h1>Redux Examples - Exercises</h1>
  
      <Messages />
     </div>
    );
  }
  
  /*
  
  <h1>Count - { props.count }</h1>
      <button onClick={() =>{
          props.dispatch(increment())
      }}>+</button>
      <Btn />
  */
  
  // const EnhancedComponent = connect()(App)
  // export default EnhancedComponent
  
  const mapStateToProps = (state) => { 
    return {
      count: state.count
    }
  }
  
  export default connect(mapStateToProps)(App)
  // export default App


// import React from 'react'
// //cannot allows us to dispatch or read values from store into component
// import { connect } from 'react-redux'
// import { increment } from './actions/countAction'

// function App() {
//   return (
//    <div>
//     <h1>Redux Examples - Exercises</h1>

//     <button onClick = {() => {
//       props.dispatch(increment())
//     }}>+</button>
//    </div>
//   )
// }

// // const EnhancedComponent = connect()(App)
// // export default EnhancedComponent

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// }

// export default connect(mapStateToProps)(App)
// // export default App
