'use strict';

/**
 * paroda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::paroda.paroda');
