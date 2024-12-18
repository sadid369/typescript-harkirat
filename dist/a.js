"use strict";
function greet(user) {
    console.log(`Hello ${user.firstName} ${user.lastName}`);
}
greet({ firstName: "james", lastName: "bond", age: 20 });
