import React, { useState } from 'react'
import './App.css'
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'
const App = () => {
  const [inputText, setinputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className='App'>
      <header>
        <h1>Dara's Todo-list</h1>
      </header>
    <Form inputText={inputText} setinputText={setinputText} todos={todos} setTodos={setTodos}/>
    <TodoList setTodos={setTodos} todos={todos}/>
    </div>

  )
}

export default App;