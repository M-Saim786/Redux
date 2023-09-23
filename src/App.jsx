import React, { useEffect } from 'react'
import { Increment } from './Config/Store/Action'
import { connect } from 'react-redux'

function App(props) {
  
  useEffect(() => {
    console.log('Use Effect')
  }, [])
  
  return (
    <div>
      fsd
      {props.count}


      <button onClick={()=>props.increment()}>
        Click
      </button>
    </div>
  )
}
// Yeh Sirf Show Krai GA
const mapToStateProps=(state)=>({
count:state.count
})
// Yeh Incrment ka function h 
const mapToDispatchProps=(dispatch)=>({
  increment:()=>dispatch(Increment())
})

export default connect(mapToStateProps,mapToDispatchProps)(App)
