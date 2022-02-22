import styled from "styled-components"

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	padding: 60px;

	border: 1px solid black;
	border-radius: 5px;
`

const Title = styled.h1`
	text-align: center;
	font-size: 42px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;

	text-align: center;

	min-width: 200px;
`

const ButtonInput = styled.input`
  border: 1px solid #000;

	outline: none;
	
	padding: 10px;
	margin-top: 20px;

	font-family: 'Amatic SC', cursive;
	font-size: 25px;

	color: #000;
	font-weight: bold;

  background-color: #fff;
	box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;

  transition: all .3s linear;
	-webkit-transition: all .3s linear;
	-moz-transition: all .3s linear;
	-webkit-appearance:none;

  ::placeholder {
		font-size: 17px;
    font-weight: bold;
  }
	
  :focus {
    border: 2px solid #000;
    border-radius: 5px;
  }

	:hover {
		cursor: none;

		font-size: 23px;

		padding: 12px;

		box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	}
`

const InputLabelStyle = styled.div`
	display: flex;
	flex-direction: column;
`

const Label = styled.label`
	margin-bottom: 10px;

	font-size: 24px;
`

const Input = styled.input`
	padding: 5px;

	border: 1px solid black;

	font-family: 'Amatic SC', cursive;
	font-weight: bold;
	font-size: 17px;
	text-align: center;
`

export { HomeStyle, Title, Form, Input, ButtonInput, Label, InputLabelStyle  }