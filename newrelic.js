const { enable } = require(".");

exports.config = {
  app_name: ['devops-project-up'],
  license_key: '36301150aeb5e7c59f33693e477cce6cFFFFNRAL',
  logging: {
    level: 'trace',
    enabled: true
  },
  application_logging: {
    enabled: true, 
    forwarding: {
      enabled: true
    },
    metrics:{
      enabled: true
    }
  }  
};