var terminalLink = require('terminal-link')
  , urlRegex = require('url-regex')

module.exports = function (input, options) {
	return input.replace(urlRegex(), function (url, index, full_text) {
		return terminalLink(url.replace(/https?:\/\//g, ''), url)
	})
}
