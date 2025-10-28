#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';  // ← Импортируем основную функцию

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2) => {
    try {
      const diff = genDiff(filepath1, filepath2);  // ← Используем genDiff
      console.log(diff);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

program.parse();