/**
* Alpha.js
*
* @description Uses custom schema1 with many-many relationship, junctionTable
*              for alpha-beta should be in schema1, not public
*/

module.exports = {

  meta: {
    schemaName: 'schema1'
  },

  attributes: {
    betas: {
      collection: 'beta',
      via: 'alphas'
    }
  }
};

