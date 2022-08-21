const models = require(".")

module.exports = function getModels(type) {

    let model = models[type];
    // console.log(data['type'])
    return model;


}