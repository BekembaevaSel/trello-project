import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		columnTodo: [
			{
				title: '',
				id: Math.random().toString(),
				tasks: [{ text: '', id: Math.random().toString() }],
			},
		],
	},
	reducers: {
		addTodo: (state, action) => {
			state.columnTodo.push(action.payload)
		},
		deleteTodo: (state, action) => {
			state.columnTodo = state.columnTodo.filter(
				(item) => item.id !== action.payload.id,
			)
		},
		todoUpdate: (state, action) => {
			const { cardData, id } = action.payload
			state.columnTodo.map((card) => {
				if (card.id === id) {
					card.tasks.push(cardData)
				}
			})
		},
	},
})

export const { addTodo, deleteTodo, todoUpdate } = todoSlice.actions

export default todoSlice.reducer;
