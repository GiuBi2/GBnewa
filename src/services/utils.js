export const formatDate = (dateTime) => {
	console.log(dateTime)
	const date = new Date(dateTime.toString())
	return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(date)
}