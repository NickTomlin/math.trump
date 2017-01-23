require('./index')
let test = require('ava')

test(t => {
  t.true(Math.trump(1) > 1)
});
