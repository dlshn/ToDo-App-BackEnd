import React , {useState} from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState(["assdd","asdasd","","mn mn","kjkjnkj","",""]);
  return (
    <>
    <div className="container">
    <div className='todo-box'>
        <h1>To-Do ListApp</h1>
        <Create/>  
    </div>

    <div className="task">
        {
            todos.length === 0
            ?
            <p>No tasks</p>
            :
            todos.map(todo=>(
                <div className='task-item'>
                    <h3>{todo}</h3>
                </div>
            ))         
        }
    </div>
    </div>
    </>
  )
}

export default Home;