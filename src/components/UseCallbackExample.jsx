import React, {useState, useCallback} from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']) 
  }, [setTasks])

  return <div>
    <Button addTask={addTask}/>
    {tasks.map((task, index) => (
      <h4 key={index}>{task}</h4>
    ))}
  </div>
}

const Button = React.memo(({addTask}) => {
  console.log('Button rendered');
  return <div>
    <button className='btn btn-primary' onClick={addTask}>Add Task</button>
  </div>
})

export default UseCallbackExample

// add React.memo (line 18) - () (18 and 23 add ())
// add useCallback (line 6) - () (6 and 8 add ()) - add , [setTasks]