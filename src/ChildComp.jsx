// import React from 'react'
// 
// function ChildComp({handlesub}) {
    // const counter=50
//   return (
    // <>
    {/* <div>ChildComp:{counter}</div> */}
    {/* <button onClick={()=>handlesub(counter)}>clik here</button> */}
    {/* </> */}
//   )
// }
// 
// export default ChildComp


import React from 'react'

function ChildComp({handlesub}) {
    let counter=500;
  return<> 
    
  <h3>this is child component </h3>
  <button onClick={()=>handlesub(counter)}>click here</button>
    </>
}

export default ChildComp