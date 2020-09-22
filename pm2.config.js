'use strict';

module.exports = {
  apps: [
    {
      name: 'sync',
      script: './dist/sync.js',
      instances: 1
    }
  ]
};
