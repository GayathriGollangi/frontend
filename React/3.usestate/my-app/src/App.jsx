import React from 'react'
import Button from './Components/Button/Button';
import Count from "./Components/Button/Count";
import CartUpdate from './Components/Cart/CartUpdate';
import Todo from './Components/Todo/Todo';

const App = () => {
  return (
  <div>
    {/* //   <Button/> */}
    {/* //   <Count/> */}
      <CartUpdate/>

      <Todo/>

    </div>
  )
}

export default App
