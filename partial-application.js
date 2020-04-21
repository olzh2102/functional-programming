// partial application

const fetch = require('node-fetch')

const getFromAPI = (baseURL) => (endpoint) => (
	cb
) =>
	fetch(`${baseURL}${endpoint}`)
		.then((res) => res.json())
		.then((data) => cb(data))
		.catch((err) => console.log(err.message))

const getGithub = getFromAPI(
	'https://api.github.com'
)

const getGithubUsers = getGithub('/users')
const getGithubRepos = getGithub('/repositories')

getGithubUsers((data) =>
	console.log(data.map((user) => user.login))
)
getGithubRepos((data) =>
	console.log(data.map((repo) => repo))
)
