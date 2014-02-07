Prism.languages.yaml = {
	comment: /#.*/ig,
	key: /^\s*[^\s]+:/igm,
	string: /(?:"[a-z][^"]*"|[a-z][\w\s<>&\.;="]*)/ig,
	number: /\b[0-9]+\b/ig,
	keyword: /(?:^\s*-|\[|\]|\||\s>)/
};