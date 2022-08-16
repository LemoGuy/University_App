const { defineAbility } = require('@casl/ability')

// TODO!! manage courses for active 

module.exports = (user) => {
    return defineAbility((can, cannot) => {
        can('read', 'mark')
        can('read', 'attendance')
        can('list', 'courses')
        can('list', 'messages')

    })
}

