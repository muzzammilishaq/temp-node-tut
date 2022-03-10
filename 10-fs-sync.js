const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, '\n'+ second);     

writeFileSync('./content/resultFile.txt',
`Here is the Result : ${first}, ${second} `,
{flag: 'a'}
)