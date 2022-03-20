import LoginPage from './components/loginPage/LoginPage'
import './App.css'
import TodoForm from './components/mainLayout/TodoForm'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginPage />}></Route>
					<Route path='/TodoForm' element={<TodoForm />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
