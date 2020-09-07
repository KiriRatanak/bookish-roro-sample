export default function buildHttpError({statusCode, errorMessage}) {
	return {
		header: {
			'Content-Type': 'application/json'
		},
		statusCode,
		data: JSON.stringify({
			success: false,
			error: errorMessage
		})
	}
}