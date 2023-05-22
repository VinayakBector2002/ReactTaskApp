import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

var GlobalTextID = 3

function App() {
  const [menuGlob, setMenu] = useState(false)
  const [tasksGlob, setTasks] = useState([])
  // Populate Data
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

// Delete Tasks
const deleteTask = async (id) => {
  console.log('delete ', id)

  await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE', })
  setTasks(tasksGlob.filter((task) => task.id !== id))
}

// Toggle Tasks
const toggleTask = async (id) => {
  console.log('toggle', id)
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setTasks(
    tasksGlob.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  )
}
// Add Tasks
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()

  setTasks([...tasksGlob, data])
}

// onAdd
const onAdd = () => {
  console.log("on Add was Clicked")
  setMenu(!menuGlob)
}
  return (
    <Router>
    <div className="container">
      <Header title="Task Tracker" onAdd={onAdd} visibleMenu={menuGlob}/>
      <Routes>
      <Route path='/' exact element = {(
        <>
          { menuGlob && <AddTask onAdd={addTask}/> }
          { (tasksGlob.length > 0 ) ? 
            <Tasks tasks={tasksGlob} onDelete={deleteTask} onToggle={toggleTask}/> :
            'No Tasks To Show' 
          }
        </>
      )} />
      <Route path='/about' element={About} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
