import React from "react";
import Homepage from "./components/Homepage";
import UserList from "./components/UserList";
import { Provider } from "react-redux";
import store from "./store/userReducer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="form-title">Login Form :</div>
        <Homepage />
        <div className="form-title">User List :</div>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
