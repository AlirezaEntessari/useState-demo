import React, {useState} from "react";

function countInitial() {
  console.log('run function')
  return 4
}

function App() {

  // You need to pass in a function that calls countInitial useState(() => {
  //   console.log('run function')
  //   return 4
  // })

  // const [count, setCount] = useState(() => {
  //   console.log('run function')
  //   return 4
  // })   // first argument is state, second argument is function used to update state

  // const [count, setCount] = useState(countInitial())    // This will run every time the component renders.

  // const [state, setState] = useState({ count: 4, theme: 'blue' })
  // const count = state.count
  // const theme = state.theme

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')


   function decrementCount() {          // incorrect way
  //   setCount(count - 1)                // count value is the value of count when we render our function, in this case they're overwriting each other
    setCount(prevCount => prevCount - 1)
  }

  // function decrementCount() {                // When we use the function version, when we have the previous count and do it two times in a row, our prevCount
  //   // setCount(prevCount => prevCount - 1)     // is passed to this.  The first time 4 is passed in, the second time 3 is passed in.  Now we're properly subtracting by two.
  //   // setCount(prevCount => prevCount - 1)  
  //   // setState(prevState => {
  //   //   return { ...prevState, count: prevState.count - 1 }
  //   // })
  // }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}


export default App;


// When you have a situation in which you need to a slow, complex computation for your initial state, make sure you use the function version instead 
// of the hardcoded version so that it only gets run one time.