import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AppTodo = ({ dispatch }) =>{
  let input
  return (
    <div>
      <form onSubmit={
        e.preventDefault()
        if(!input.value.trim()){
          return
        }
        dispatch(addTodo(input.value))
      }>

        <input type="text" ref={
          node =>{
            input = node
          }
        }/>
        <button>ADD_todo</button>
       </form>
    </div>
  )
}

AppTodo = connect()(AppTodo)

export default AppTodo
