import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const inputsChangeHandler = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
		console.log(values)
	}

	const loginHandler = (e) => {
		e.preventDefault()

		if (values.email !== '' && values.password !== '') {
			return navigate('./TodoForm')
		}
	}
	return (
		<Fragment>
			<FormControl>
				<div>
					<img
						alt='trello'
						src='https://www.vectorlogo.zone/logos/trello/trello-official.svg'
					/>
				</div>
			</FormControl>
			<LoginControl>
				<section>
					<div>
						<div>
							<h1>Вход в Trello</h1>
						</div>

						<div>
							<form onSubmit={loginHandler}>
								<div>
									<input
										value={values.email}
										onChange={inputsChangeHandler}
										type='email'
										name='email'
										placeholder='Укажите адрес электронной почты'
									/>
								</div>
								<div>
									<input
										value={values.password}
										onChange={inputsChangeHandler}
										type='password'
										name='password'
										placeholder='Введите пароль'
									/>
								</div>
							</form>

							<button
								type='submit'
								value='Войти'
								onClick={loginHandler}
							>
								Войти
							</button>
						</div>
					</div>

					<div>
						<h2>ИЛИ</h2>
						<div
							className='iconsSection'
							id='google-btn'
							tabIndex='0'
						>
							<img src='https://img.icons8.com/office/16/000000/google-logo.png' />
							<span>Войти через Google</span>
						</div>
						<div className='iconsSection'>
							<img src='https://img.icons8.com/color/48/000000/microsoft.png' />
							<span>Войти через Microsoft</span>
						</div>
						<div className='iconsSection'>
							<img src='https://img.icons8.com/ios-filled/50/000000/mac-os.png' />
							<span>Войти через Apple</span>
						</div>
						<div className='iconsSection'>
							<img src='https://img.icons8.com/doodle/48/000000/slack-new.png' />
							<span>Войти через Slack</span>
						</div>
					</div>

					<p>
						<a>Войти с помощью электронной почты и пароля</a>
					</p>
					<p>
						<a>Вход с помощью SSO</a>
					</p>
					<hr></hr>
					<ul>
						<li>
							<a>Не удается войти?</a>
						</li>
						<li>
							<a>Зарегистрировать аккаунт</a>
						</li>
					</ul>
				</section>
				<div>
					<ul>
						<li>
							<a>Политика конфиденциальности</a>
						</li>
						<li>
							<a>Условия использования</a>
						</li>
					</ul>
				</div>

				<footer></footer>
			</LoginControl>
		</Fragment>
	)
}

const FormControl = styled.div`
	margin: 0;
	box-shadow: 5px;

	& img {
		display: block;
		height: 43px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 40px;
		margin-bottom: 40px;
	}
`
const LoginControl = styled.div`
	margin: 0;
	& section {
		margin: 0 auto;
		max-width: 400px;
		padding: 0px;
		overflow: visible;
		margin-bottom: 30px;
		background-color: #ffffff;
		border-radius: 8px;
		padding: 25px 40px;
		box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
	}
	& h1 {
		text-align: center;
		color: #5e6c84;
		font-size: 16px;
		line-height: 28px;
		margin-top: 10px;
		margin-bottom: 25px;
	}
	& hr {
		display: block;
		height: 1px;
		border: 0;
		border-top: 1px solid hsl(0, 0%, 80%);
		margin: 1em 0;
		padding: 0;
	}

	& input {
		font-size: 14px;
		background-color: #fafbfc;
		border: 2px solid #dfe1e6;
		box-sizing: border-box;
		border-radius: 3px;
		height: 44px;
		width: 320px;
		margin: 0 0 1.2em;
		padding: 8px;
		outline: none;
	}
	& input:focus {
		transition: 0.5s;
		border: 2px solid #4c9aff;
	}
	& button {
		font-size: 14px;
		background: #5aac44;
		height: 44px;
		width: 320px;
		color: #ffffff;
		font-weight: bold;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
	& button:hover {
		outline: none;
		background-color: #7ebc6d;
	}
	& h2 {
		text-align: center;
		font-size: 12px;
		margin-top: 16px;
		margin: 16px;
	}

	& .iconsSection {
		background-color: #ffffff;
		box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
		border-radius: 3px;
		width: 99%;
		height: 39px;
		padding-top: 0;
		margin-bottom: 12px;
		border-color: transparent;
	}
	& .iconsSection:hover {
		background-color: #e3dddd;
		cursor: pointer;
	}
	& span {
		font-size: 14px;
		font-family: inherit;
		font-weight: bold;
		color: #505f79;
		padding: 3px;
		height: 32px;
		line-height: 32px;
	}
	& a {
		text-decoration: none;
		color: #0052cc;
		color: hsl(202, 40%, 55%);

		cursor: pointer;
	}
	& a:hover {
		text-decoration: underline;
		color: blue;
	}
	& li {
		list-style: none;
		margin: 30px;
	}
	& img {
		display: inline-block;
		border-radius: 1px;
		width: 18px;
		height: 18px;
		vertical-align: middle;
	}
	& .errorMsg {
		margin-left: 100px;
		margin-bottom: 30px;
		width: 200px;
		height: 70px;
		background-color: red;
		color: #ffffff;
		border-radius: 3px;
	}
`

export default LoginPage

// const useInput = () => {
// 	const [enteredValue, setEnteredValue] = useState()

// 	const valueChangeHandler = (e) => {
// 		setEnteredValue(e.target.value)
// 	}

// 	return {
// 		enteredValue,
// 		setEnteredValue,
// 		valueChangeHandler,
// 	}
// }

// const email = useInput()
// const password = useInput()

//  <input type='email' onchange={email.valueChangeHandler} value={email.enteredValue} />
//  <input type='password' />

//  const submitHandler = () => {
// 	 email.setEnteredValue('')
//  }
