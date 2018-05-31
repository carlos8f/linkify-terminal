var linkifyTerminal = require('./')

require('micro-request').get('https://gist.githubusercontent.com/carlos8f/038182197479b3ada9d4057269ba1703/raw/3027a99f9a95611ef8feeef7e5fdab5660a9def6/gistfile1.txt', function (err, resp, body) {
  if (err) throw err
  console.log(linkifyTerminal(body))
})
