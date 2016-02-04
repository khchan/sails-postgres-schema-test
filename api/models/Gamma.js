/**
* Gamma.js
*
* @description Uses default public schema with many-many relationship, junctionTable
*              for gamma-delta should be in default public schema
*/

module.exports = {

  attributes: {
    deltas: {
      collection: 'delta',
      via: 'gammas'
    }
  }
};

