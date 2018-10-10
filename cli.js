#!/usr/bin/env node
const Beeper = require('./src/Beeper');

// getting args
const [,, ...args] = process.argv;

// calculating interval: default 60
const interval = parseInt(args[0]) || 60;
const beeper = new Beeper({ interval: interval * 1000 });