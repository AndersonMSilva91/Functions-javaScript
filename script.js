const prompt = require("prompt-sync")();
const r = require('./result');
const weight = prompt('Insert your weight: ');
const height = prompt('Insirt your height: ');
const h = Number(height);
const w = Number(weight);
const finalweight = r(w,h)
console.log(`your imc is: ${finalweight}`);
