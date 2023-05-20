import React from 'react'
import * as style from "../Styles/styles"
import TodoCardEntry from './Common/TodoCardEntry'

function TodoCard({ todo }) {

  return (
    <TodoCardEntry isDone={ todo.todoStatus } title={ todo.todoContent } priority={ todo.todoPriority }/>

  )
}


export default TodoCard