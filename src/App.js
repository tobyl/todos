import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const App = () => {

  const [todos, setTodos] = useState(['first todo!', 'second todo...'])

  const addTodo = item => {
    const newTodos = Object.assign([], todos)
    newTodos.push(item)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h3>My Todo List</h3>
      <span>0 items</span>
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} />
    </div>
  )
}

export default App
