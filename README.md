# Single Spa MUI example

Example project which imports MUI components into a utility module which is then used by other micro frontends

## Contents

This is a monorepo containing a root-config and 3 micro frontends. It uses Lerna to run commands across all the packages. 

## Installation and setup

* Run `yarn bootstrap`
* Run `yarn start`
* Navigate to http://localhost:9000

The app will render two microfront ends, both containing an MUI Typography component using a custom MUI theme.

## Test/Build

* Run `yarn test`
* Run `yarn build`
