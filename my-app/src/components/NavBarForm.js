import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';
import NavBarChild from './NavBarChild';


class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true,
      }
    }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      isLoggedIn: prevState.isLoggedIn ? false : true
    }), () => console.log(this.state.isLoggedIn))
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>

        {/* {this.state.isLoggedIn ?
            <button onClick={() => this.handleButtonClick()}>Login</button>
          :
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Username" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Password" name="password" />
            <button onClick={() => this.handleButtonClick()}>Submit</button>
          </form>
        } */}

        <NavBarChild
        isLoggedIn={this.state.isLoggedIn}
        handleClick={this.handleButtonClick} />
      </div>
    )
  }
}

export default NavBarForm;