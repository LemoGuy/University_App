const roles = require(".")

module.exports = function getRole(user) {
    // Guarding statement
    if (!user) {
        return roles.Guest(user);
    }

    // if we have user, then..
    let role = roles[user.__t];
    role = role(user);

    return role;


}