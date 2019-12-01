const merge = require('webpack-merge');
const prodEnv = require("./prod.env");

module.exports = {
   NODE_ENV: '"development"',
   VUE_APP_BASE_API: '"/"'	
};
