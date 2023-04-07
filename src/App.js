import React from "react";
import AlertAndDropdown from "./AlertAndDropdown";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <h1>React hooks & reactstrap 연습</h1>
      <h4>reactstrap으로 alert와 dropdown을 만들고, hook으로 제어해보자!</h4>
      <AlertAndDropdown />
    </div>
  );
}

export default App;
