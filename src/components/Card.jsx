// const withDataFetching = (wrappedComponent)=>{
//   class DataFatching extends React.Component{
//     state={
//       data:null,
//       loading:ture,
//     };
//     componentDidMount(){
//       fetch(this.props.dataSource)
//       .then((response)=>response.json())
//       .then((data)=>this.setState({data,loading:false5}))
//       .catch((error)=>console.error('error fetching data',error))
//     }
//     render(){
//       return;
//     }
//   }
//   return DataFatching;
// };

//  what happens if you directly modify the state using 'this.state' in a class compontent 
//  how can you upadate multiple state variables simultaneously in a class compontent?//by using the 'this.setstate()callback function
//  what is the  correct way to initialize state inside a class compontent in reactjs
//  what dose the pipe()do in node.js?//3
//  which lifecycle method should be used to fetch data from an external API When a class compontent mounts?//comodidmount
//  //window.innerWidth property return
//  which of the following node.js bulit in module is used to handle readble steams one line at the time
//  in flux,what is the role of Action?
//  1.to manage user interaction and trigger data updates
//  2.to define the structure of the flux store
//  3.to handle API calls and async operation//ans
//  4.to render component in a react application

//  what is the purpose of the "arguments" object in a javascripts function?//it provides access to all arggument object in a javascripts function
 
 
//  /what does the withPropsValidation HOC do
//  const withPropsValidation=(wrappedComponent)=>{
//   class PropsValidation extends React.Component{
//     static propType={
//       name:propType.string.isRequired,
//       age:propType.string.isRequired,
//     };
//     render(){
//       return;
//     }
//   }
//  }
//    //which best explain getSelection()====The getSelection() method returns the value of the cursor-selected text.

// mongodb create a collection impicity when the collection is first referenced in a command

 