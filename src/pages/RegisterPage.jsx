
import React from "react";
import Add from "../img/addAvatar.png"

const RegisterPage = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Spring Chat</span>
          <span className="title">Login</span>
          <form>
            <input type="text" placeholder=" display name" />
            
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input className="file" type="file" id="file"  />
            <label htmlFor="file">
              <img src={Add} alt=""/>
              <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
          </form>
          <p>Already have registered? Login</p>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;