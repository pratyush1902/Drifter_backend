'use strict';

/**
 * food-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-info.food-info');
