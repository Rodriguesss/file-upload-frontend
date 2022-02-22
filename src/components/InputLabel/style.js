import styled from "styled-components"

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

export { InputLabelStyle, Label, Input }