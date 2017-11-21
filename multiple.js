const requestPromise = require('request-promise');

const doOperation = () => {
 // 1. LOGIN
 // 2. PARALLEL GET  NAME, DOB, PHONE
 // 3. CONSOLE LOG `NAME:${name} dob:${dob} phone:${phone}`
 // 4. LOGOUT

 // HANDLE ERROR CASES
}

// LOGIN API -  http://localhost:3008/login
// NAME API - http://localhost:3008/name?token="TOKEN FROM LOGIN"
// DOB API - http://localhost:3008/dob?token="TOKEN FROM LOGIN"
// PHONE API - http://localhost:3008/phone?token="TOKEN FROM LOGIN"
// LOGOUT API - http://localhost:3008/logout?token="TOKEN FROM LOGIN"

module.exports = {
  doOperation: doOperation
};
