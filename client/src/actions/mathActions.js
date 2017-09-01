export const addNumber = (number) => {
	return {
		type: "ADD_NUMBER",
		payload: number
	}
}

export const subtractNumber = (number) => {
	return {
		type: "SUBTRACT_NUMBER",
		payload: number
	}
}