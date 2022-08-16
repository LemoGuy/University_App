const { defineAbility } = require('@casl/ability')

module.exports = (user) => {
    return (defineAbility((can, cannot) => {
        cannot('manage', 'all');
    }));
}
