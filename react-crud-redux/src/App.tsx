import React from "react";
import Homepage from "./components/Homepage";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <div className="form-title">Login Form :</div>
      <Homepage />
      <div className="form-title">User List :</div>
      <UserList />
    </div>
  );
}

export default App;
