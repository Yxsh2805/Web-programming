import React, { Component } from "react";

class LoginPortal extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", fontFamily: "Verdana", marginTop: "20px" }}>
        <h2>Secure Login Portal</h2>
        <form style={{ display: "inline-block", textAlign: "left" }}>
          <label>Username: <input type="text" name="user" /></label>
          <br />
          <label>Password: <input type="password" name="pass" /></label>
          <br />
          <label>Work Location: <input type="text" name="location" /></label>
          <br />
          <label>Server Access:
            <select>
              <option>-- Select Server --</option>
              <option>Main Server</option>
              <option>Backup Server</option>
              <option>Cloud Node</option>
            </select>
          </label>
          <br /><br />
          <fieldset>
            <legend>Your Role</legend>
            <label><input type="radio" name="role" value="admin" /> Admin</label>
            <label><input type="radio" name="role" value="dev" /> Developer</label>
            <label><input type="radio" name="role" value="manager" /> Manager</label>
            <label><input type="radio" name="role" value="guest" /> Guest</label>
          </fieldset>
          <br />
          <fieldset>
            <legend>Enable Single Sign-On</legend>
            <label><input type="checkbox" name="email" /> Email</label>
            <label><input type="checkbox" name="hr" /> HR Portal</label>
            <label><input type="checkbox" name="dashboard" /> Dashboard</label>
          </fieldset>
          <br />
          <button type="submit">Sign In</button>
          <button type="reset" style={{ marginLeft: "10px" }}>Clear</button>
        </form>
      </div>
    );
  }
}

export default LoginPortal;
