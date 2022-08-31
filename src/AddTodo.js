import { useState } from "react"

const AddTodo = ({ addTodo }) => {

  const [val, setVal] = useState('')

  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <button onClick={() => addTodo(val)}>Add Todo</button>
    </div>
  )
}

export default AddTodo