import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import './Forcss.css'
import useHttps from './use-Http';


function MainFileForhooks() {
  const [tasks, setTasks] = useState([]);
  const fordata=(data)=>{
    const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
  }
  const afteusehook=useHttps({url :'https://lists-3041e-default-rtdb.firebaseio.com/task.json'},fordata)
  useEffect(() => {
    afteusehook.fetchTasks();
  }, []);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={afteusehook.isLoading}
        error={afteusehook.error}
        onFetch={afteusehook.fetchTasks}
      />
    </React.Fragment>
  );
}
export default MainFileForhooks;