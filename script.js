<<<<<<< HEAD
const prompt = require("prompt-sync")();
const r = require('./result');
const weight = prompt('Insert your weight: ');
const height = prompt('Insirt your height: ');
const h = Number(height);
const w = Number(weight);
const finalweight = r(w,h)
console.log(`your imc is: ${finalweight}`);
=======
const prompt = require("prompt-sync")();
const r = require('./result');
const weight = prompt('Insert your weight: ');
const height = prompt('Insirt your height: ');
const h = Number(height);
const w = Number(weight);
const finalweight = r(w,h)
console.log(`your imc is: ${finalweight}`);
>>>>>>> 053f770e7d59c2af7f907358c53efbf1945b9657
