# Overview

This system will echo back any information it is sent to test the REST interface of the mapper
service of the matching service. You can also cause errors to be returned if the data is set
to the key values.

## Key data items

The following data items have meaning to the secho service. If these items are in the root of the JSON 
document that is passed to the echo service, the echo service will change its behavour.

* echo_return: ERROR - Causes the echo service to generate an error condition. A 500 if return_code is not
  in the dcument.
* echo_return_code: 5xx - Is return: ERROR is set in the document, use this error code as the returned code
  instead of the 500 internal error.
* echo_modify: true - Have the data document that was passed to the echo service changed by the service.
* echo_add: true - Have the echo service add data to the document.

# The Project

The structure of the project is:

project+
       |-dist+
       |     |-documents
       |     |-configurations
       |
       |-src
       |-test

## Tools used

The following tools are used with a global scope to build, ship and work on this project.

* git - The source code is held in a git repository (to be named)
* npm markdown-to-html - The documentation (like this one) is written using Markdown. 
  * Run "sudo npm install -g markdown-to-html"
* npm typescript - The code is written in TypeScript not JavaScript directly. 
  The tsc command is used to build the service. To install typescript run the following:
  "sudo npm install -g typescript" 

# Project Setup

The following steps were used to initialize the project. All dependent 
modules are in the git repository and you should not need to add any 
tools to your development environment.

## Development environment

* npm init -y
* npm install typescript@2.0.6 --save-dev
* npm install gulp@3.9.1 gulp-typescript@3.1.1 --save-dev
* sudo npm install -g gulp@3.9.1
* npm install express@4.14.0 debug@2.2.0 --save
* npm install @types/node@6.0.46 @types/express@4.0.33 @types/debug@0.0.29 --save-dev
* npm install express@4.14.0 body-parser@1.15.2 morgan@1.7.0 --save
* npm install @types/body-parser@0.0.33 @types/morgan@1.7.32 --save-dev

## Test environment

* npm install mocha@3.1.2 chai@3.5.0 chai-http@3.0.0 --save-dev
* npm install @types/mocha@2.2.32 @types/chai@3.4.34 @types/chai-http@0.0.29 --save-dev
* npm install ts-node@1.6.1 --save-dev
* npm install del --save-dev
* npm install @types/del --save-dev

## Build

To build the code run `gulp scripts`

## Run

To run the service, run `npm start`

## Unit Tests

To Run all unit tests, run `npm test`

