exports.config = {
  app_name: ['devops-project-up'],
  license_key: process.env.NEWRELIC_KEY,
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