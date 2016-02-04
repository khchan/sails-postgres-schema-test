/**
* Delta.js
*
* @description Uses default public schema with many-many relationship, junctionTable
*              for gamma-delta should be in default public schema
*/

module.exports = {

  attributes: {
    gammas: {
      collection: 'gamma',
      via: 'deltas'
    }
  }
};

