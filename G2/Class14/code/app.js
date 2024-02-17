// import only specific members from userService
// import {getUsersByRole, getUserNames} from "./userService.js";

//import all exported members from userService
import * as userService from "./userService.js";


// const userNames = getUserNames();
const userNames = userService.getUserNames();
console.log(userNames);

// const adminUsers = getUsersByRole('admin');
// console.log(adminUsers);