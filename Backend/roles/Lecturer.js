const { defineAbility } = require('@casl/ability')

// TODO!! manage own courses for lecturer
module.exports = (user) => {
    return (defineAbility((can, cannot) => {
        can('update', 'Student', ["marks"])

        // can('update', 'student.attendance', own, { status: 'active' })
    }));
}

