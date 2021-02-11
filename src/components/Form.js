import React from 'react'

const Form = ( {setinputText, inputText, todos, setTodos} ) => {
  //write a function
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setinputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 100}
    ]);
    setinputText('');
  }
    return (
    <form>
      <input value={inputText} onChange={ inputTextHandler } type="text" className="todo-input" />
      <button onClick={ submitTodoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form;