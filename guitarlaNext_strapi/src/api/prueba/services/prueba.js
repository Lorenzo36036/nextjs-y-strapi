'use strict';

/**
 * prueba service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prueba.prueba');
