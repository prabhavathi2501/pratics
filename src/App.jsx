// import React from 'react'
//  import Card from './components/Card';

// function App() {
  
//   let name="praba vathi";
//   let age="30";
//   let child="deeksha prathiksha charvik";
//   let action = false
//   const shoot=()=>{
//     alert("hiiiiii this is my first app")
//   }
//   const foo=()=>{
//     alert("out of te webside")
//   }

//   const data =[
//     { 
//    name:"praba", 
//    age:"30",
//    work:"home maker"
//  },
// {
//   name:"charvik",
//   age:"4",
//   class:"lkg"
// }
// ]
// const handlesubmit=()=>{
//   count++
//   console.log(count)
// }
//   return <>
// <h1>see my name{name}</h1>
// <h1>my age is:{age}</h1>
// <h1>my childern name are see below:{child}</h1>
// <p>this is our action return {action?<h1>present</h1>:<p>not present</p>}</p>
// <center>
// <button style={{height:"50px", color:"blue"}} onClick={shoot}>click here</button>
// <button style={{height:"50px", color:"blue"}} onClick={shoot}>click out</button>
// </center>
//  {
// data.map((e,i)=>{
//    <Card data={e} key={i}/>
// })
// } 
// <div>
//   <button className="btn btn-danger" onClick={handlesubmit}>clcik me see the{count}</button>
// </div>
//   </>
// }

// export default App
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   let [count,setCount]=useState(0)
//   let [count1,setCount1]=useState(0)
//   let [incre,setIncre]=useState(0)
//   let[color,setColor]=useState("red")
//   const handlesubmit=()=>{
//     count++
   
//   }
//   return <>
//  <div>
//   <center>
//   <button onClick={()=>{
//   setCount(count++)
//   console.log(count)
//   }}>clllllllcik me here ow many time return {count}</button>
//   <button onClick={()=>{
//   setCount1(--count1)
//   console.log(count1)
//   }}>clllllllcik me here ow many time return {count1}</button>
//   <button onClick={()=>{
//     setIncre(incre+1)
//   }}>clllllllcik me here ow many time return {incre}</button>
//   </center>
//   <center>
//     <div>
//       <p>This is my color {color}</p>
//       <button onClick={()=>{
//         setColor("blue")
//       }}>chnage my color</button>
//     </div>
//   </center>
//  </div>
   
//   </>
// }

// export default App

// import React from 'react'
// import { Router,Route, BrowserRouter } from 'react-router-dom'
// import Card from './components/Card'


// function App() {
//   return <>
//  <BrowserRouter>
//   <Router>
//     <Route path='/card' element={<Card/>}/>
//   </Router>
//   </BrowserRouter>
 
//   </>
// }

//export default App

// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap';

// function App() {
//   const [count,setCount]=useState(0);
//   const [cal,setCal]=useState(0)
 //this no dependency passed
//  useEffect(()=>{
//   setTimeout(()=>{
// setCount(count=>count+1)
//   },1000)
//  })

    //empty dependency passed
// useEffect(()=>{
//     setCount(count=>count+1)
 
// },[])
// useEffect(()=>{
// setCal(()=>count*2)
// },[count])
//   return <>
//    <center>
//     <p>No dependency passed</p>
//     <p>run in every render</p>
//     <br/>
//     <br/>
//    <h1 className='hi'>hi tis is our use effect code times to render{count}</h1>
//    </center> 
//     <center>
//     <p>count:{count}</p>
//     <Button onClick={()=> setCount((c)=>c+1)}>+</Button>
//     <p>Calculation:{cal}</p>
//    </center> 
//   // </>
// }

//  export default App

// import React, { useEffect, useRef, useState } from 'react'

// function App() {
//   // let [count,setCount]=useState(0);
//   let count=useRef(0)
//   let[name,setName]=useState("")
// useEffect(()=>{
//  count.current+=1
// })    
// return <>
//   <center>
//   <h1>use ref using components</h1>
//   <input type="text" onChange={(e)=>setName(e.target.value)}></input>
//   <p>This is input how many times render{count.current}</p>
//   </center>
//   </>
// }

// export default App
// import React, { useEffect, useRef, useState } from 'react'

// function App() {
  
//   let[name,setName]=useState(0)
// let count=useRef(0)
//   useEffect(()=>{
//     count.current+=1
//   })
//   return <>
//   <h1>hi how are you</h1>
//   <input type="text" onChange={(e)=>(setName(e.target.value))}/>
//   <p>
//     see here {count.current}
//   </p>  
//   </>
// }
// export default App


// import React, { Component } from 'react';

// class LifecycleExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   incrementCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
// }));
//   };

//   render() {
//     console.log('Component rendered');
//     return (
//       <div>
//         <h1>Lifecycle Example</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment Count</button>
//       </div>
//     );
//   }
// }

// export default LifecycleExample


//this is prerent to child compent pass the valuse in props
// import React from 'react'
// import CompA from './CompA';
// import CompB from './CompB';

// function App() {
//   let a=10;
//   return <>
//   <h1>parent to child component tranfer</h1>
//   <p> here your see tha a valuse a:{a}</p>
//   <CompA a={a}/>
//   <CompB a={a}/>

//   </>
// }

// export default App


// import React from 'react'
// import CompA from './CompA';
// import CompB from './CompB';
// import { useState } from 'react';

// function App() {
//  let[val,setVal]=useState(10)
//  let [data,setData]=useState("prabha")
//   return <>
//   <h1>parent to child component tranfer</h1>
//   <p> here your see tha a valuse val:{val} data:{data}</p>
//   <CompA val={val} setVal={setVal} data={data} setData={setData} />
//   <CompB val={val} setVal={setVal} data={data}setData={setData}/>

//   </>
// }

// export default App



//this child to parent componet to change the valuse

// import React from 'react'
// import ChildComp from './ChildComp'

// function App() {
//   const handlesub=(counter)=>{
//     console.log("this is parent compoent will change",counter)
//   }
//   return <>
//   <h1>thhis is a chhild to parent componet</h1>
//   <h3>hellow world</h3>
//   <ChildComp handlesub={handlesub}/>
  
//   </>
// }

// export default App

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// function App() {
//   let [count,setCount]=useState(0)
//   let [deccount,setDeccount]=useState(0)
// return (
//    <>
//    <center>
//     <button onClick={()=>{
//       setCount(count++)

//     }}> +++ but{count}</button>
//     <p>count:{count}</p>
//     <button onClick={()=>{
//       setDeccount(deccount--)

//     }}> -- but{deccount}</button>
//     <p>count:{deccount}</p>
//    </center>
//    </>
//   )
// }

// export default App

// import React from 'react'
// import { useEffect } from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// function App() {
//   // let[count,setCount]=useState(0);
//   let count=useRef(0)
//   let[name,setName]=useState("")
//   useEffect(()=>{
//     count.current+=1
//   })
//   return (
//    <>
//    <h3>useref hetrrt</h3>
//    <input type="text" onChange={(e)=>setName(e.target.value)}></input>
//    <p>see {count.current}</p>
//    </>
//   )
// }

// export default App