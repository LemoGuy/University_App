const models = require(".")

module.exports = function getModels(data) {

    let model = models[data.type];
    // console.log(data['type'])
    return model;


}