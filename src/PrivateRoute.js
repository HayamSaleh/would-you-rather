// import React from 'react'
// import { Navigate, Route } from 'react-router-dom'
// import { connect } from 'react-redux'

// const PrivateRoute = ({ component: Component, ...rest }) => {

//   // Add your own authentication on the below line.
//   return (
//     <Route exact path="/" element={<component/>}/>

//     // <Route
//     //   {...rest}
//     //   render={props =>
//     //     <Route exact path="/" element={<Component/>} {...props}/>
//     //     // <Component {...props} />

//     //     // props.authedUser ? (
//     //     //   <Component {...props} />
//     //     // ) : (
//     //     //   <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
//     //     // )
//     //   }
//     // />
//   )
// }


// function mapStateToProps({authedUser}, props){
//   return {
//     authedUser,
//   }
// }

// export default connect(mapStateToProps)(PrivateRoute)