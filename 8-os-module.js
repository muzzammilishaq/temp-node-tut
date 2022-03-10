
// info about current user
const os = require('os')
const user = os.userInfo()
console.log(user);

// info about about current uptime
console.log(`The current uptime is ${os.uptime} seconds`); 

const currentOS = {
    name: os.type(),
    release: os.release(),
    total1Mem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

