import React from "react";
import AddTask from "./Components/Add";
import ListTask from "./Components/list";

function App() {
  return (
    <div className="container">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;