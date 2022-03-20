import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteTodo, todoUpdate } from '../../store/todoSlice'

const TodoControl = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	& div {
		border: 3px;
		background-color: lightgray;
		opacity: 0.8;
		border-radius: 5px;
		margin: 20px;
		width: 300px;
		height: 140px;
	}

	& input {
		height: 25px;
		background-color: aliceblue;
		outline: none;
		border-color: #0079bf;
		color: black;
		font-size: 16px;
	}
	& span {
		cursor: pointer;
		font-size: 20px;
	}
	& button {
		background-color: #0079bf;
		color: #fff;
		width: 75px;
		height: 25px;
		margin: 10px;
	}

	& textarea {
		box-shadow: rgb(0 0 0 / 20%) 1px 4px 5px 2px;
		outline: none;
		border: none;
		margin: 5px;
		padding: 0;
		width: 200px;
		height: 40px;
	}
`
const NewTodosControl = styled.ul`
	border: 3px;
	background-color: lightgray;
	opacity: 0.8;
	border-radius: 5px;

	& li {
		list-style: none;
	}
`

const Todo = ({ id, title, tasks, setActive }) => {
	const dispatch = useDispatch()

	const [value, setValue] = useState('')
	const [textareavalue, setTextareaValue] = useState('')
	const [showTextArea, setShowTextArea] = useState(false)

	const HideTextarea = () => {
		setShowTextArea(false)
	}
	const showTextAreaHandler = () => {
		setShowTextArea((prevState) => !prevState)
		setShowTextArea(true)
	}

	const addNewTodo = (e) => {
		e.preventDefault()
		if (textareavalue.trim().length > 0) {
			const cardData = {
				text: textareavalue,
				id: Math.random().toString(),
			}
			dispatch(todoUpdate({ cardData, id }))
		}
		setTextareaValue('')
	}

	const removeTask = () => {
		dispatch(
			deleteTodo({
				id: id,
			}),
		)
	}
	return (
		<Fragment>
			<TodoControl key={id}>
				{showTextArea ? (
					<div>
						<input
							type='text'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						></input>
						<textarea
							type='text'
							value={textareavalue}
							onChange={(e) => setTextareaValue(e.target.value)}
							placeholder='Ввести заголовок для этой карточки'
						/>
						<button onClick={addNewTodo}>Add</button>
						<span onClick={HideTextarea}>&times;</span>
					</div>
				) : (
					<div>
						<input
							type='text'
							value={title}
							onChange={(e) => setValue(e.target.value)}
						></input>
						<span onClick={showTextAreaHandler}>
							Добавить карточку +
						</span>
					</div>
				)}{' '}
				<NewTodosControl>
					{' '}
					<ul>
						{tasks.map((task) => (
							<li key={task.id} onClick={() => setActive(true)}>
								{task.text} &times;
								{/* <img src='https://img.icons8.com/material/24/000000/menu-2--v1.png' /> */}
							</li>

							// 	 <li onClick={removeTask} key={task.id}>
							// 		 	{task.text} &times;
							// </li>
						))}
					</ul>
				</NewTodosControl>
			</TodoControl>
		</Fragment>
	)
}

export default Todo
