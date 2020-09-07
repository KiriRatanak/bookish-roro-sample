export default function upperFirst(words) {
	if(words.length === 1) {
		return words.toUpperCase()
	}
	return words.split(' ').map(word => 
		word.charAt(0).toUpperCase() + 
		word.substring(1))
		.join(' ')
}