
 import React from 'react'
 import Hello from './components/Hello'
 import Footer from './components/Footer'



const App = () => {
    const name = 'Peter'
    const age = 10

  // const now = new Date()
  // const a = 10
  // const b = 20

  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement(
  //     'p', null, 'Hello world, it is ', now.toString()
  //   ),
  //   React.createElement(
  //     'p', null, a, ' plus ', b, ' is ', a + b
  //   )
  // )


  return (
    
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
    
  )


  

  // return (
  //   <div>
  //     <p>Hello world, it is {now.toString()}</p>
  //     <p>
  //       {a} plus {b} is {a + b}
  //     </p>
  //   </div>
  // )

  // console.log('Hello from component')
  //  return ( <div>
  //     <p>Hello Villagers</p>
  //   </div>
  // )
}
export default App














// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
// export default App




