import Util from './index.js';

console.log(Util);

const list = [
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' },
];

const filter = Util.UtilFilter(list, 'key', 'value');
console.log(filter(1));
console.log(filter(2));
console.log(filter(3));
