const Joi = require('joi');

const { artilleryNumberOrString } = require('../joi.helpers');

//TODO: type internal properties of this plugin

const ApdexPluginConfigSchema = Joi.object({
  threshold: artilleryNumberOrString
})
  .unknown(false)
  .meta({ title: 'Apdex Plugin' });

module.exports = {
  ApdexPluginConfigSchema
};
