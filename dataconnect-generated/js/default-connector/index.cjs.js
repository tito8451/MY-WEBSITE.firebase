const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'MY-WEBSITE.firebase',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

