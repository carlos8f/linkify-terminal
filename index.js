var terminalLink = require('terminal-link')
  , urlRegex = require('url-regex')

module.exports = function (input, opts) {
  opts = (opts || {})
  return input.replace(urlRegex(), function (url, index, full_text) {
    return terminalLink(opts.pretty ? url.replace(/https?:\/\//g, '') : url, url)
  })
}
