#!/usr/bin/env node

/**
 * Build
 * Requer Node JS e Tuild
 */
var Tuild = require('tuild').Tuild;

//Tuild.__quiet = true;

//JS
Tuild.command('js ../jquery.browser.selector.js > ../jquery.browser.selector.min.js');