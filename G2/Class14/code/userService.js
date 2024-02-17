import { users } from "./users.js";
console.log(users);

// find returns the first element that fulfils the test or null/undefined
function getUserByEmail(userEmail) {
    return users.find(user => user.email === userEmail)
}

function getUserByName(userName) {
    return users.find(user => user.name === userName)
}

// filter always returns array. If no results, it will return []
function getUsersByRole(userRole) {
    return users.filter(user => user.role === userRole);
}

function getUserNames() {
    return users.map(user => user.firstName);
}

export {
    getUserByEmail,
    getUserByName,
    getUsersByRole,
    getUserNames
}