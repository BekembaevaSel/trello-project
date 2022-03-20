import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const TodoList = ({setActive}) => {
	const todos = useSelector((state) => state.todos.columnTodo)

	return (
		<>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					id={todo.id}
					title={todo.title}
					tasks={todo.tasks}
					setActive={setActive}
				/>
			))}
		</>
	)
}

export default TodoList
