import { createSlice } from '@reduxjs/toolkit'
const initialLoginState = { isLogin: false }


const loginSlice = createSlice({
	name: 'login',
	initialState: {
		value: '',
		isValid: null,
		error: '',
	},
	reducers: {
		login(state, action) {
			state.isLogin = true
		},
		notLogin(state) {
			state.isLogin = false
		},
	},
})

export const loginActions = loginSlice.actions
export default loginSlice
