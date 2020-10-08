#!/usr/bin/env node
import { greeting } from './cli.js'

console.log('Welcome to the Brain Games!')
console.log(await greeting())