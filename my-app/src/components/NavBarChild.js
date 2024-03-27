import React from 'react';

function NavBarChild(props) {
  return (
      props.isLoggedIn ?
      <button onClick={props.handleClick}>Login</button>
      :
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" name="password" />
        <button onClick={props.handleClick}>Submit</button>
      </form>
  )
}

export default NavBarChild;