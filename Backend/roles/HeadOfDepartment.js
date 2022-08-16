const { defineAbility } = require('@casl/ability')

// TODO!! manage later
module.exports = (user) => {
    return defineAbility((can, cannot) => {
        can('manage', 'Course', { "department": user.department})
        can('manage', 'Student', { "department": user.department})
        can('manage', 'Lecturer', { "department": user.department})
    })
}
