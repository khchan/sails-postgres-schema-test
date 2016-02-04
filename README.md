# sails-postgres-schema-test

A [Sails](http://sailsjs.org) application for showing bug in sails-postgresql adapter.

There are 4 models in this project: Alpha, Beta, Gamma, and Delta.  Alpha and Beta have a many-many relationship with each other and have meta.schemaName set to schema1; Gamma and Delta have a many-many relationship with each other and use the default public schema.  

Versions:
* sails@0.12.0-rc4
* sails-postgresql@0.11.1
* postgresql-9.4

Lifting the project on Ubuntu 14.04.3 LTS produces expected results: alpha-beta junctionTable exists on schema1, and gamma-delta junctionTable exists on public default schema.

However, lifting the project on CentOS 6.6 results in all junctionTables for alpha-beta and gamma-delta to appear on the public schema.
