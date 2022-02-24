const { readFileSync } = require('fs');
const { join } = require('path');

const browsersList = readFileSync(
  join(__dirname, '.browserslistrc'),
  'utf8'
).split('\n');

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: browsersList,
        },
      },
    ],
  ],
};
