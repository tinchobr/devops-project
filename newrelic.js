exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
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