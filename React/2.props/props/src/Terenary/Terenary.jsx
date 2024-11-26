import React from 'react'

const Terenary = () => {
    const isUserAuthenticated = true;
  return (
    <div>
        {isUserAuthenticated ? <h1>Hello</h1>:<h1>React</h1>}
    </div>
  )
}

export default Terenary
