import React, { useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import TodoList from './TodoList'
import Modal from '../modalWindow/Modal'

const InputControl = styled.div`
	display: flex;
	/* margin: 0; */

	& p {
		cursor: pointer;
		font-weight: bold;
		font-size: 15px;
	}

	& .inputsection {
		display: flex;
		width: 300px;
		height: 140px;
		flex-direction: column;
		border: 3px;
		background-color: lightgray;
		opacity: 0.8;
		margin: 20px;
		border-radius: 5px;
	}

	& input {
		height: 25px;
		background-color: aliceblue;
		outline: none;
		color: grey;
		border-color: #0079bf;
	}
	& .innerBlock {
		display: flex;
		justify-content: space-around;
	}
	& button {
		background-color: #0079bf;
		color: #fff;
	}
	& img {
		width: 20px;
		height: 20px;
	}
`
const ToggleControl = styled.div`
	width: 300px;
	height: 50px;
	background-color: #ffffff3d;
	cursor: pointer;
	border-radius: 3px;
	padding: 4px;
	margin: 50px;
	color: #ffffff;

	font-size: 18px;
`

const TodoForm = () => {
	const dispatch = useDispatch()
	const [value, setvalue] = useState('')
	const [showTodoAddcart, setShowTodoAddCart] = useState(false)
	const [modalActive, setModalActive] = useState(false)

	const onSubmit = (event) => {
		event.preventDefault()
		if (value.trim().length > 0) {
			const columnData = {
				title: value,
				id: Math.random().toString(),
				tasks: [],
			}
			dispatch(addTodo(columnData))
		}

		setvalue('')
	}
	const HidecartHandler = () => {
		setShowTodoAddCart(false)
	}
	const toggleTodoAddCart = () => {
		setShowTodoAddCart((prevState) => !prevState)
		setShowTodoAddCart(true)
	}
	return (
		<>
			<Header />

			<InputControl>
				<TodoList setActive={setModalActive}/>
				{showTodoAddcart ? (
					<div className='inputsection'>
						<div>
							<input
								type='text'
								onChange={(event) =>
									setvalue(event.target.value)
								}
								placeholder='Ввести заголовок списка'
							/>
						</div>
						<div className='innerBlock'>
							<button onClick={onSubmit} type='submit'>
								Добавить список
							</button>
							<p onClick={HidecartHandler}>X</p>
						</div>
					</div>
				) : (
					<ToggleControl>
						<div>
							<span onClick={toggleTodoAddCart}>
								&#43; Добавить карточку
							</span>
						</div>
					</ToggleControl>
				)}
			</InputControl>
			{modalActive && <Modal active={modalActive} setActive={setModalActive} />}
			
		</>
	)
}

export default TodoForm
