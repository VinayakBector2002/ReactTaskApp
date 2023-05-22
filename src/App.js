import { useState } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasksGlob, useTasks] = useState([
    {
        id: 1,
        text: 'Sample Text',
        day: 'Sample Date',
        reminder: true,
    },
])
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasksGlob}/>
    </div>
  );
}

export default App;
