import React from 'react'
import styled from 'styled-components'

const ModalControl = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
    transition: 2s;

`
const ModalContentControl = styled.div`
	padding: 20px;
	border-radius: 12px;
	background-color: white;
	height: 400px;
	width: 400px;
	opacity: 1;
	pointer-events: all;

	& input {
		height: 50px;
		width: 400px;
		background-color: aliceblue;
		outline: none;
		border-color: #0079bf;
		color: black;
		font-size: 16px;
	}
	& button {
		background-color: #0079bf;
		color: white;
	}
`

const Modal = ({ active, setActive }) => {
	return (
		<ModalControl>
			<div onClick={() => setActive(false)}>
				<ModalContentControl>
					<div onClick={(e) => e.stopPropagation()}>
						<h1>Описание</h1>
						<input placeholder='Добавить более подробное описание...' />
						<button> Сохранить </button>
						<button>X</button>
					</div>
				</ModalContentControl>
			</div>
		</ModalControl>
	)
}

export default Modal
